const cypress = require("cypress");

Cypress.Commands.add('purgeQueueMessages', () => {
    cy.api({
      url: Cypress.env ('amqpHost') + '/tasks/contents',
      method: 'DELETE',
      body: {
        vhost: 'ierdvsng', // Corrigido para o vhost correto
        name: Cypress.env('amqpQueue'),
        mode: 'purge'
      },
      headers: {
        authorization: Cypress.env('amqpToken')
      },
      failOnStatusCode: false
    }).then(response => {return response});
  });
  
  Cypress.Commands.add('getQueueMessages', () => {
    cy.api({
      url: Cypress.env ('amqpHost') + '/tasks/get',
      method: 'POST',
      body: {
        count: '1', // Agora é um número
        ack_mode: "reject_requeue_true",
        encoding: "auto",
        truncate: '50000' // Agora é um número
      },
      headers: {
        authorization: Cypress.env('amqpToken')
      },
      failOnStatusCode: false
    }).then(response => {return response});
  });
  