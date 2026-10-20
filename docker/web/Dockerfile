FROM golang:1.22-alpine AS builder

WORKDIR /src
COPY go.mod ./
COPY cmd ./cmd
COPY internal ./internal
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /out/web ./cmd/web
# Í

FROM scratch
COPY --from=builder /out/web /web
USER 65532:65532
EXPOSE 8080
ENTRYPOINT ["/web"]
