
import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });

export async function POST(req: NextRequest) {
  try {
    const { product } = await req.json();

    // Garante que o preço seja um número
    const priceAsNumber = parseFloat(product.preco);

    if (isNaN(priceAsNumber)) {
      return NextResponse.json({ error: 'Preço inválido.' }, { status: 400 });
    }

    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [
          {
            title: product.titulo || product.descricao, // Usa a descrição se o título não existir
            quantity: 1,
            currency_id: 'BRL',
            unit_price: priceAsNumber, // Envia o preço como número
          },
        ],
        back_urls: {
          success: `${req.nextUrl.origin}/success`,
          failure: `${req.nextUrl.origin}/failure`,
          pending: `${req.nextUrl.origin}/pending`,
        },
        auto_return: 'approved',
      },
    });

    return NextResponse.json({ url: result.init_point });
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    return NextResponse.json({ error: 'Ocorreu um erro ao processar o pagamento.' }, { status: 500 });
  }
}
