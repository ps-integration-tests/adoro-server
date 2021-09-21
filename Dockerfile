FROM paperspace/first-order-model:latest

RUN pip3 install fastapi aiofiles uvicorn[standard]
