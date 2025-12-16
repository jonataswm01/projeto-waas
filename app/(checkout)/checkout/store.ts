import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PLAN_PRICES, DOMAIN_PRICE_MONTHLY, DOMAIN_PRICE_ANNUAL, type ModelId } from '@/lib/checkout-data'

export type PlanCycle = 'monthly' | 'annual'
export type DomainOwnership = 'new' | 'existing'

interface CustomerData {
  document: string
  name: string
  phone: string
  tipoDocumento: 'cpf' | 'cnpj'
}

interface CheckoutState {
  // Configuração do Produto
  selectedModelId: ModelId | null
  billingCycle: PlanCycle
  domain: string | null
  domainValidated: boolean
  domainOwnership: DomainOwnership
  
  // Dados do Usuário (Step 3)
  email: string | null
  customerData: CustomerData | null

  // Actions
  setModel: (modelId: ModelId) => void
  setCycle: (cycle: PlanCycle) => void
  setDomain: (domain: string, validated: boolean, ownership?: DomainOwnership) => void
  setEmail: (email: string) => void
  setCustomer: (data: CustomerData) => void
  reset: () => void
  
  // Getters
  getTotalPrice: () => number
  getDomainPrice: () => number
  getSavings: () => number
  isStepComplete: (step: number) => boolean
}

const initialState = {
  selectedModelId: null,
  billingCycle: 'annual' as PlanCycle,
  domain: null,
  domainValidated: false,
  domainOwnership: 'new' as DomainOwnership,
  email: null,
  customerData: null,
}

export const useCheckoutStore = create<CheckoutState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setModel: (modelId) => set({ selectedModelId: modelId }),

      setCycle: (cycle) => set({ billingCycle: cycle }),

      setDomain: (domain, validated, ownership = 'new') =>
        set({ domain, domainValidated: validated, domainOwnership: ownership }),

      setEmail: (email) => set({ email }),

      setCustomer: (data) => set({ customerData: data }),

      reset: () => set(initialState),

      getTotalPrice: () => {
        const state = get()
        if (!state.selectedModelId) return 0

        const planPrice = PLAN_PRICES[state.selectedModelId][state.billingCycle]
        const domainPrice = state.domainOwnership === 'existing' 
          ? 0 
          : (state.billingCycle === 'annual' 
            ? DOMAIN_PRICE_ANNUAL 
            : DOMAIN_PRICE_MONTHLY)

        return planPrice + domainPrice
      },

      getDomainPrice: () => {
        const state = get()
        // Se for domínio existente, não cobra nada
        if (state.domainOwnership === 'existing') return 0
        
        return state.billingCycle === 'annual' 
          ? DOMAIN_PRICE_ANNUAL 
          : DOMAIN_PRICE_MONTHLY
      },

      getSavings: () => {
        const state = get()
        if (!state.selectedModelId || state.billingCycle === 'monthly') return 0

        const monthlyPrice = PLAN_PRICES[state.selectedModelId].monthly
        const annualPrice = PLAN_PRICES[state.selectedModelId].annual

        // Economia anual (12 meses)
        const monthlyTotal = monthlyPrice * 12
        const annualTotal = annualPrice * 12

        return monthlyTotal - annualTotal
      },

      isStepComplete: (step) => {
        const state = get()
        
        switch (step) {
          case 1: // Configuração
            return !!(
              state.selectedModelId &&
              state.domain &&
              state.domainValidated
            )
          case 2: // Carrinho/Revisão
            return state.isStepComplete(1) // Mesma validação do step 1
          case 3: // Identidade
            return !!(
              state.email &&
              state.customerData &&
              state.customerData.document &&
              state.customerData.name &&
              state.customerData.phone
            )
          case 4: // Pagamento
            return state.isStepComplete(3) // Mesma validação do step 3
          default:
            return false
        }
      },
    }),
    {
      name: 'lovesite-checkout-storage',
      partialize: (state) => ({
        selectedModelId: state.selectedModelId,
        billingCycle: state.billingCycle,
        domain: state.domain,
        domainValidated: state.domainValidated,
        domainOwnership: state.domainOwnership,
        // Não persistir dados sensíveis do usuário
      }),
    }
  )
)
