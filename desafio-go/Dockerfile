FROM golang as builder

WORKDIR /app

COPY ./fullcycle.go .

RUN go build fullcycle.go

# ========================================

FROM scratch

WORKDIR /app

COPY --from=builder /app/fullcycle .

CMD [ "./fullcycle" ]
