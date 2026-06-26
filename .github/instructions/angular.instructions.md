---
applyTo: 'src/app/**/*.ts'
---

# Reglas para Angular del proyecto

- Usa componentes standalone cuando agregues o modifiques componentes.
- Mantén la lógica de negocio y el acceso a datos en servicios; los componentes deben centrarse en la vista y la interacción.
- Sigue la estructura del proyecto en src/app/gifs: pages, components, services, interfaces, mapper y pages.
- Usa inyección de dependencias con `inject()` o `providedIn: 'root'` cuando corresponda.
- Prefiere señales (`signal`) para manejar estado local y compartido cuando sea apropiado, como ya se hace en los servicios.
- Mantén nombres de clases, archivos y carpetas consistentes con el estilo actual: `*.component.ts`, `*.service.ts`, `*.interface.ts` y `*.mapper.ts`.
- Evita agregar dependencias nuevas si la solución puede resolverse con lo que ya existe en el proyecto.
- Mantén templates y estilos simples, legibles y alineados con las convenciones actuales del proyecto.
