# Fakta App

## Beskrivning
En enkel webbapplikation som listar 10 fakta lagrade i en MongoDB-databas.

## Teknisk Stack
- Node.js
- Express
- MongoDB
- Docker
- Docker Compose

## Installation

### Förutsättningar
- Docker
- Docker Compose

### Klona repo och bygg applikationen
```sh
git clone <repo-url>
cd ..
docker-compose up -d --build
docker-compose exec web node src/seed.js
- (optional. För att se logs, helst i en ny terminal) 
docker-compose logs -f 

####
- http://localhost:3000  (Web sida)
- http://localhost:3000/fakta (JSON lista av 10 fakta sidan hämtar)


### Del 2 - Teori

#### Pris och kapacitet

##### Containers vs VMs

- **Containers**:
  - **Fördelar**:
    - Snabbare uppstartstid.
    - Mindre resurskrävande.
    - Enklare att hantera och distribuera.
  - **Nackdelar**:
    - Begränsad isolation jämfört med VMs.
    - Kan vara komplex att konfigurera för vissa nätverks- och säkerhetsinställningar.

- **Virtual Machines (VMs)**:
  - **Fördelar**:
    - Starkare isolation.
    - Kan köra olika operativsystem på samma maskin.
  - **Nackdelar**:
    - Långsammare uppstartstid.
    - Mer resurskrävande.

#### Lagring

För att jämföra kostnader för lagring på Azure och en annan leverantör, kan du använda följande priser som exempel:

- **Azure Blob Storage**:
  - **Hot**: $0.018 per GB per månad
  - **Archive**: $0.001 per GB per månad

- **AWS S3**:
  - **Standard**: $0.023 per GB per månad
  - **Glacier**: $0.004 per GB per månad

För 25 GB:
- **Azure**: (25 * 0.018 * 0.5) + (25 * 0.001 * 6) = $0.225
- **AWS**: (25 * 0.023 * 0.5) + (25 * 0.004 * 6) = $0.375

**Sammanfattning**: Containers är ofta billigare och snabbare att hantera än VMs, men för stark isolation kan VMs vara att föredra. När det gäller lagring är Azure något billigare än AWS för både heta och arkiverade data.

Med dessa steg och jämförelser har du nu en komplett lösning för din webbapplikation.
