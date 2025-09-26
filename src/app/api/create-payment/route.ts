
import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const accessToken = process.env.MP_ACCESS_TOKEN;

if (!accessToken) {
  console.error('Mercado Pago access token is not configured. Please set the MP_ACCESS_TOKEN environment variable.');
}

const client = new MercadoPagoConfig({ accessToken: accessToken! });

export async function POST(req: NextRequest) {
  if (!accessToken) {
    return NextResponse.json({ error: 'Ocorreu um erro de configuração, entre em contato com o suporte.' }, { status: 500 });
  }

  try {
    const { product } = await req.json();

    const priceAsNumber = parseFloat(product.preco);

    if (isNaN(priceAsNumber)) {
      return NextResponse.json({ error: 'Preço inválido.' }, { status: 400 });
    }

    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [
          {
            title: product.titulo || product.descricao,
            quantity: 1,
            currency_id: 'BRL',
            unit_price: priceAsNumber,
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
