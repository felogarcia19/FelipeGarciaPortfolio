from .models import Product, StoreInfo


STORE_INFO = StoreInfo(
    name="SoundHarbor Instruments",
    tagline="Crafted tones for every stage.",
    hero_text=(
        "Discover a focused catalog of instruments designed for players, "
        "collectors, and home studios."
    ),
    contact_email="hello@soundharbor-demo.com",
    contact_phone="+1 (555) 010-7788",
    location="Austin, Texas",
)


PRODUCTS = [
    Product(
        id="p-1001",
        name="Aurora Strat Electric Guitar",
        category="Guitars",
        price=799.00,
        short_description="A versatile electric guitar with bright highs and smooth mids.",
        details="Roasted maple neck, alder body, and custom single-coil pickups.",
        image_url="http://127.0.0.1:8000/assets/images/AuraLesPaulGuitar.png",
    ),
    Product(
        id="p-1002",
        name="Monarch Dreadnought Acoustic",
        category="Guitars",
        price=529.00,
        short_description="Warm low-end resonance and clear projection for live sessions.",
        details="Solid spruce top with mahogany back and sides.",
        image_url="http://127.0.0.1:8000/assets/images/Guitar.png",
    ),
    Product(
        id="p-2001",
        name="Pulse 5-String Bass",
        category="Bass",
        price=699.00,
        short_description="Deep and articulate tone for modern groove-heavy arrangements.",
        details="Active EQ, lightweight swamp ash body, and satin neck finish.",
        image_url="http://127.0.0.1:8000/assets/images/BassGuitar.png",
    ),
    Product(
        id="p-3001",
        name="Nova Stage Keyboard 61",
        category="Keyboards",
        price=899.00,
        short_description="Performance-ready keyboard with expressive feel and layered sounds.",
        details="Semi-weighted keys, assignable controls, and USB-C audio.",
        image_url="http://127.0.0.1:8000/assets/images/Keyboard.png",
    ),
    Product(
        id="p-4001",
        name="EchoLine Drum Kit",
        category="Drums",
        price=1099.00,
        short_description="Punchy shells and durable hardware for rehearsals and touring.",
        details="Birch shells, double-braced stands, and coated heads.",
        image_url="http://127.0.0.1:8000/assets/images/Drums.png",
    ),
]
