# ✅ Verificação de Campos Salvos no Banco

## Campos que DEVEM ser salvos na tabela `leads`

### Campos Obrigatórios:
1. ✅ **id** - UUID gerado com `randomUUID()`
2. ✅ **created_at** - Timestamp automático do banco (DEFAULT now())
3. ✅ **nome** - `data.nome` (Nome completo)
4. ✅ **whatsapp** - `data.whatsapp` (Número do WhatsApp)
5. ✅ **email** - `data.email` (Email do cliente)
6. ✅ **empresa** - `data.empresa` (Nome da empresa)
7. ✅ **nicho** - `data.nicho` (Nicho selecionado)
8. ✅ **dominio** - `checkedDomain || formData.dominio` (Domínio validado ou informado)
9. ✅ **template** - `data.template` (ID do template: essencial, profissional, empresarial)
10. ✅ **status** - `"PENDING"` (Status inicial)
11. ✅ **cnpj** - Documento limpo (sem máscara: apenas números)
12. ✅ **tipo_documento** - `"cpf"` ou `"cnpj"` (Tipo do documento)

## Verificação do Código

### Arquivo: `app/actions/createLead.ts`

```typescript
// Limpar máscara do documento antes de salvar
const documentoLimpo = data.documento ? data.documento.replace(/\D/g, "") : null

await supabaseAdmin.from('leads').insert({
  id: randomUUID(),                    // ✅
  nome: data.nome,                     // ✅
  whatsapp: data.whatsapp,             // ✅
  email: data.email,                   // ✅
  empresa: data.empresa,                // ✅
  nicho: data.nicho,                   // ✅
  dominio: data.dominio,                // ✅
  template: data.template,              // ✅
  cnpj: documentoLimpo,                // ✅ (sem máscara)
  tipo_documento: data.tipoDocumento,   // ✅
  status: "PENDING",                    // ✅
  // created_at automático             // ✅
})
```

## Validações Implementadas

### No Frontend (Step 1):
- ✅ Nome obrigatório
- ✅ WhatsApp obrigatório
- ✅ Email obrigatório e válido
- ✅ Empresa obrigatória
- ✅ Nicho obrigatório
- ✅ Domínio obrigatório e validado
- ✅ Documento obrigatório (CPF ou CNPJ)
- ✅ Validação de dígito verificador do documento

### No Backend (createLead):
- ✅ Todos os campos obrigatórios validados
- ✅ Email com regex validation
- ✅ Documento limpo (sem máscara) antes de salvar

## Formato dos Dados Salvos

- **Documento (cnpj)**: Apenas números (ex: `12345678901` para CPF, `12345678000190` para CNPJ)
- **Tipo Documento**: String `"cpf"` ou `"cnpj"`
- **Domínio**: String limpa (ex: `meusite.com.br`)

## Status: ✅ TUDO CONFIGURADO CORRETAMENTE!

Todos os campos estão sendo salvos no banco de dados conforme esperado.

