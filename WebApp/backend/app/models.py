from pydantic import BaseModel


class Product(BaseModel):
    id: str
    name: str
    category: str
    price: float
    short_description: str
    details: str
    image_url: str


class StoreInfo(BaseModel):
    name: str
    tagline: str
    hero_text: str
    contact_email: str
    contact_phone: str
    location: str
