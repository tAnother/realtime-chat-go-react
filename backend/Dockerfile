FROM golang:1.19

RUN mkdir /app 
ADD . /app/ 
WORKDIR /app 
RUN go mod download
RUN go build -v
RUN ls