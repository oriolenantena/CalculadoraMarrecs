.PHONY: dev build start lint install clean help

# Default target
help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies"
	@echo "  make dev      - Start development server"
	@echo "  make build    - Build for production (static export)"
	@echo "  make start    - Start production server"
	@echo "  make lint     - Run ESLint"
	@echo "  make clean    - Remove build artifacts"
	@echo "  make help     - Show this help message"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npx serve out

lint:
	npm run lint

clean:
	rm -rf .next out node_modules/.cache
