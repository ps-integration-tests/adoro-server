from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/", StaticFiles(directory="static", html=True),  name="adoro-web-static")

@app.post("/generate")
def create_adoro(reference_png_base64: str):
    pass
