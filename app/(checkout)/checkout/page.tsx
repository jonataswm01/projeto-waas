import { redirect } from "next/navigation"

export default function CheckoutPage() {
  // Redireciona para step-1 por padrão
  redirect("/checkout/step-1")
}
