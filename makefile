.PHONY: build deploy clean release dev

dev: 
	@echo "🚀 Iniciando el servidor de desarrollo..."
	@npm run dev || { echo "❌ Falló el servidor de desarrollo"; exit 1; }

build:
	@echo "📦 Construyendo el proyecto..."
	@npm run build || { echo "❌ Falló la construcción"; exit 1; }
	@echo "✅ Construcción completada."

deploy:
	@echo "🚀 Haciendo deploy a Surge..."
	@echo "📦 Construyendo el proyecto..."
	@npm run build || { echo "❌ Falló la construcción"; exit 1; }
	@echo "✅ Construcción completada."
	@if [ -n "$(SURGE_TOKEN)" ]; then \
		npx surge dist fibra-ya-chapela.surge.sh --token $(SURGE_TOKEN) || { echo "❌ Falló el deploy"; exit 1; }; \
	else \
		npx surge dist fibra-ya-chapela.surge.sh || { echo "❌ Falló el deploy"; exit 1; }; \
	fi
	@echo "✅ Deploy completado en: https://fibra-ya-chapela.surge.sh"
	@echo "📦 Limpiando la carpeta dist..."
	@rm -rf dist
	@echo "✅ Carpeta dist eliminada."

clean:
	@echo "🧹 Limpiando carpeta dist..."
	@rm -rf dist
	@echo "✅ Carpeta dist eliminada."

release: build deploy clean
	@echo "🎉 Proceso de release completo."
