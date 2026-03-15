from fastapi import APIRouter

router = APIRouter(prefix="/cards", tags=["cards"])


@router.get("/")
def get_cards():
    return {"cards": []}


@router.post("/")
def create_card():
    return {"message": "Card created"}