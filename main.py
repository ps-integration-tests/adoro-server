from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from demo import 

app = FastAPI()

app.mount("/", StaticFiles(directory="adoro-web"), name="adoro-web")

@app.post("/generate")
def create_adoro(reference_png_base64: str):
    pass
