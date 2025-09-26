'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { todosOsPdfs } from '@/lib/mock-data'

const product = todosOsPdfs[0];

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product }),
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Erro ao criar pagamento:', data.error)
        alert('Ocorreu um erro ao processar o pagamento.')
      }
    } catch (error) {
      console.error('Erro ao criar pagamento:', error)
      alert('Ocorreu um erro ao processar o pagamento.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          {product && (
            <>
              <div className="flex items-center space-x-4 mb-6">
                {product.capa && <img src={product.capa} alt={product.titulo} className="w-24 h-32 object-cover rounded-md" />}
                <div>
                  <h2 className="font-bold">{product.titulo}</h2>
                  <p className="text-gray-600 text-sm">{product.descricao}</p>
                  <p className="text-lg font-bold mt-2">R$ {product.preco.toFixed(2)}</p>
                </div>
              </div>
              <Button onClick={handleCheckout} disabled={loading} className="w-full">
                {loading ? 'Processando...' : 'Pagar com Mercado Pago'}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
