FROM paperspace/first-order-model:latest

ADD . ./
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
