# Build stage
FROM golang:1.25-alpine AS builder

WORKDIR /build

# Copy all required modules
COPY core/ ./core/
COPY ui/ ./ui/
COPY services/landing/ ./services/landing/

# Download dependencies and build (disable go.work)
ENV GOWORK=off
WORKDIR /build/services/landing
RUN go mod download
RUN go build -o /app/landing .

# Final stage
FROM alpine:latest

WORKDIR /app

# Create non-root user
RUN addgroup -g 1000 appuser && \
    adduser -D -u 1000 -G appuser appuser

# Copy binary (assets are embedded)
COPY --from=builder /app/landing .

# Change ownership
RUN chown -R appuser:appuser /app

USER appuser

EXPOSE 8081

CMD ["./landing"]
