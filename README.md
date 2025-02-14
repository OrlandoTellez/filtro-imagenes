```markdown
# Editor de Imágenes con Filtros

![Interfaz de la aplicación](/img/imagen-proyecto.png) 

Aplicación web para aplicar filtros a imágenes directamente desde el navegador. Permite ajustar brillo, contraste, saturación y desenfoque, con opción de descargar la imagen modificada.

## Características Principales
- 📤 Subida de imágenes por arrastrar y soltar o selección de archivo
- 🎚️ Ajustes en tiempo real de:
  - Brillo
  - Contraste
  - Saturación
  - Desenfoque
- 🔄 Botón de reinicio para valores predeterminados
- ⬇️ Descarga de imagen modificada
- 📱 Diseño responsive para dispositivos móviles

## Tecnologías Utilizadas
- **Backend**: Node.js + Express
- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Template Engine**: EJS
- **Gestión de Paquetes**: npm

## Instalación y Uso

### Requisitos Previos
- Node.js (v14 o superior)
- npm (v6 o superior)

### Pasos de Instalación
1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/orlandotellez-filtro-imagenes.git
```
2. Instalar dependencias:
```bash
npm install
```
3. Iniciar la aplicación:
```bash
npm run dev  # Modo desarrollo (con recarga automática)
# ó
npm start    # Modo producción
```
4. Abrir en navegador: `http://localhost:3000`

## Estructura del Proyecto
```
orlandotellez-filtro-imagenes/
├── package.json          # Configuración de proyecto y dependencias
└── src/
    ├── server.js         # Configuración del servidor Express
    ├── public/           # Archivos estáticos
    │   ├── css/
    │   │   └── styles.css  # Estilos principales
    │   └── js/
    │       └── script.js   # Lógica de la aplicación
    └── views/
        └── index.ejs      # Plantilla principal
```

## Uso
1. **Subir imagen**:
   - Haz clic en el área punteada o arrastra una imagen
   - Formatos soportados: JPEG, PNG

2. **Aplicar filtros**:
   - Usa los sliders para ajustar los parámetros
   - Los cambios se aplican en tiempo real

3. **Opciones**:
   - 🔄 **Reiniciar**: Vuelve los filtros a valores predeterminados
   - ⬇️ **Descargar**: Guarda la imagen con los filtros aplicados

## Contribución
Las contribuciones son bienvenidas. Sigue estos pasos:
1. Haz un fork del proyecto
2. Crea tu branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request
