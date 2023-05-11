# Bem vindo à DEVinHouse <img width="180px" alt="Philips" src="ExerciciosM03S02/images/logo-phil.png"/>
## Módulo 03 - Semana 02

Repositório criado para a elaboração dos 10 exercícios referentes a **Testes Unitários** em `Angular` essa semana. <br>

Para visualizar os exercícios, <a href="https://github.com/GeorgeEnriqueBravo/DEVinHouse-Modulo03-Semana02/archive/refs/heads/main.zip" target="_blank">
    clique aqui
</a>
para baixa-los. <br>

Após o download, abra a pasta do projeto por um terminal ou pelo CMD do computador e digite o comando `npm install` para instalar a pasta node_modules e depois digite o comando `npm test` para visualizar o resultado dos testes no seu navegador.
  
---

# Lista de exercícios <img width="75px" alt="Philips" src="ExerciciosM03S02/images/lista.png"/>
### [M3S02] Ex 1 - Projeto para a criação dos testes unitários

- Os testes que devem ser criados nessa semana, terão como base o projeto desenvolvido no <a href="https://github.com/DEVin-Philips/curso-angular/tree/main/notification-app" target="_blank">
    curso-angular/notification-app at main · DEVin-Philips/curso-angular
</a> <br>
- Vamos utilizar o projeto notification-app
- Você pode criar os testes diretamente no projeto acima citado
- Para ajudar na criação dos testes, você pode acompanhar o projeto exemplo: <a href="https://github.com/DEVin-Philips/mod3sem02/tree/main/projeto-exemplo-github-curso-angular" target="_blank">
    mod3sem02/projeto-exemplo-github-curso-angular at main · DEVin-Philips/mod3sem02
</a>

### [M3S02] Ex 2 - ContentComponent : criação da estrutura de testes

- Criar o arquivo content.component.spec.ts na estrutura: notification-app/src/app/components/content/
- Criar toda a estrutura de testes, contemplando o primeiro cenário de teste: <br>
`it('Should create component', () => {        
expect(component).toBeTruthy();        });`
- Executar o teste para saber se está tudo funcionando corretamente.

### [M3S02] Ex 3 - ContentComponent: criação do teste para o ngOnInit

- Continuamos no arquivo de teste content.component.spec.ts, agora vamos criar o seguinte cenário de teste para contemplar o método inicial ngOnInit , chamado: `'ngOnInit - Should call carregarNotificacoes method with success'`

### [M3S02] Ex 4 - ContentComponent: criação do teste para o método lerNotificacao

- Continuamos no arquivo de teste content.component.spec.ts, agora vamos criar o seguinte cenário de teste para contemplar o método lerNotificacao: `'lerNotificacao - Should call atualizarLista method with success'`

### [M3S02] Ex 5 - ContentComponent: criação do teste para atualizarLista

- Continuamos no arquivo de teste content.component.spec.ts, agora vamos criar o seguinte cenário de teste para contemplar o método atualizarLista: `'atualizarLista - Should call carregarNotificacoes method with success'`

### [M3S02] Ex 6 - ContentComponent: criação do teste para carregarNotificacoes

- Continuamos no arquivo de teste content.component.spec.ts, agora vamos criar o seguinte cenário de teste para contemplar o método carregarNotificacoes: `'carregarNotificacoes - Should return values to listaDeNotificacoes with success'`

### [M3S02] Ex 7 - ContentComponent: criaçaõ do teste para removerNotificacao

- Continuamos no arquivo de teste content.component.spec.ts, agora vamos criar o seguinte cenário de teste para contemplar o método removerNotificacao: `'removerNotificacao - Should call atualizarLista method with success'`

### [M3S02] Ex 8 - NotificationService: criação da estrutura de testes

- Criar o arquivo notification.service.spec.ts na estrutura: notification-app/src/app/services/
- Criar toda a estrutura de testes, contemplando o primeiro cenário de teste: <br>
`it('Should create component', () => {        expect(component).toBeTruthy();        });`
- Executar o teste para saber se está tudo funcionando corretamente.

### [M3S02] Ex 9 - NotificationService: criação de testes

- Continuamos no arquivo de teste notification.service.spec.ts, agora vamos criar cenários de testes para contemplar os seguintes métodos:
    - getNotifications
    - getNotificationsApi
    - addNotificationApi
    - editNotificationApi
    - removeNotification

### [M3S02] Ex 10 - Relatório de cobertura de testes

- Terminamos as implementações de cenários de testes para as nossas classes de serviços, agora é o momento de você validar se todas as condicionais que se encontram em cada metódo foram contempladas. <br><br>

---

# O que é DEVinHouse?
DEVinhouse é uma jornada de aceleração da carreira com: grade curricular direcionada, professores do mercado, prática constante, interação frequente com as houses parceiras de cada turma, simulação do dia-a-dia DEV e vagas exclusivas que são abertas pelas Houses durante a jornada.

No DEVinHouse você vira um desenvolvedor Fullstack em 9 meses, ao longo de 900 horas de conteúdo, divididas em três módulos de 3 meses cada, com intervalo de uma semana entre cada um. Aproximadamente 25 horas de dedicação por semana entre aulas, atividades e vivências.

__1º módulo:__ Front-End – JavaScript e Angular <br/>
__2º módulo:__ Back-End – Java, Spring e SQL <br/>
__3º módulo:__ Full-Stack – Scrum, DevOps, Clean Code e Design Patterns <br/>
__Ferramentas__ – GitHub, Trello e Slack

---

# Tecnologias Utilizadas <img width="35px" alt="🌐" src="ExerciciosM03S02/images/tag.gif"/>
Nos exercícios dessa semana foram utilizadas as seguintes tecnologias:
<div style="display: inline_block">
    <img align="center" alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
    <img align="center" alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
    <img align="center" alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img align="center" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    <img align="center" alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
    <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <img align="center" alt="Trello" src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white"/>
    <img align="center" alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/> 
</div>

