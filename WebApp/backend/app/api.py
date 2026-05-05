from fastapi import APIRouter

from .data import PRODUCTS, STORE_INFO

router = APIRouter(prefix="/content", tags=["content"])


@router.get("/store-info")
def get_store_info() -> dict:
    return STORE_INFO.model_dump()


@router.get("/products")
def get_products() -> list[dict]:
    return [product.model_dump() for product in PRODUCTS]
