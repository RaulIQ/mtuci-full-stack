from fastapi import FastAPI
from app.routers import auth, cards, upload

app = FastAPI(
    title="FlashLearn API",
    description="API for generating flashcards from PDF",
    version="1.0"
)

app.include_router(auth.router)
app.include_router(cards.router)
app.include_router(upload.router)


@app.get("/")
def root():
    return {"message": "FlashLearn API is running"}