
import { NextRequest, NextResponse } from 'next/server'
import mercadopago from 'mercadopago'

// Configure o Mercado Pago com suas credenciais
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN || 'APP_USR-4239277895248439-092602-14aa3ca4f84aeda407c5b1083f14d30f-1221502187',
})

export async function POST(req: NextRequest) {
  try {
    const { product } = await req.json()

    const preference = {
      items: [
        {
          title: product.titulo,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: product.preco,
        },
      ],
      back_urls: {
        success: `${req.nextUrl.origin}/success`,
        failure: `${req.nextUrl.origin}/failure`,
        pending: `${req.nextUrl.origin}/pending`,
      },
      auto_return: 'approved' as 'approved',
    }

    const response = await mercadopago.preferences.create(preference)

    return NextResponse.json({ url: response.body.init_point })
  } catch (error) {
    console.error('Erro ao criar pagamento:', error)
    return NextResponse.json({ error: 'Ocorreu um erro ao processar o pagamento.' }, { status: 500 })
  }
}
