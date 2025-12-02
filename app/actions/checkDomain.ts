"use server"

const RDAP_BASE_URL = "https://rdap.registro.br/domain/"

type DomainCheckResult = {
  available: boolean
  domain: string
}

const sanitizeDomain = (rawDomain: string) => {
  if (!rawDomain) return ""

  const cleaned = rawDomain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .replace(/\s+/g, "")

  if (!cleaned) {
    return ""
  }

  if (cleaned.includes(".br")) {
    return cleaned
  }

  return `${cleaned.replace(/\.+$/, "")}.com.br`
}

export async function checkDomainAvailability(
  domain: string
): Promise<DomainCheckResult> {
  const sanitizedDomain = sanitizeDomain(domain)

  if (!sanitizedDomain) {
    throw new Error("Informe um domínio para verificarmos.")
  }

  try {
    const response = await fetch(`${RDAP_BASE_URL}${sanitizedDomain}`, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    })

    if (response.status === 404) {
      return { available: true, domain: sanitizedDomain }
    }

    if (response.ok) {
      return { available: false, domain: sanitizedDomain }
    }

    throw new Error("Resposta inesperada do Registro.br.")
  } catch (error) {
    console.error("Erro ao consultar RDAP:", error)
    throw new Error("Não conseguimos verificar agora. Tente novamente.")
  }
}


