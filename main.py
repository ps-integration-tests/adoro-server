from fastapi import FastAPI

from demo import 

app = FastAPI()


@app.get("/question")
def question():
    return {"answer": 42}


@app.post("/generate")
def create_adoro(reference_png_base64: str):
    pass
