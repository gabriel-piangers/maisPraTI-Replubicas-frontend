export const morador = 'Renato'

export  const mock = {
    despesas: [
      {
        tipo: 'Aluguel',
        vencimento: 10,
        total: 2100,
        pagamentos: [
          ['Claudio', 700]
        ]
      },
      {
        tipo: 'Condominio',
        vencimento: 10,
        total: 500,
        pagamentos: []
      },
      {
        tipo: 'Energia',
        vencimento: 8,
        total: 210.47,
        pagamentos: [
          ['Carlos', 210.47]
        ]
      },
      {
        tipo: 'Mantimentos',
        vencimento: 4,
        total: 420,
        pagamentos: [
          ['Renato', 420]
        ], 
      }
    ],
    moradores: [
      {
        nome: 'Carlos',
        administrador: false
      },
      {
        nome: 'Renato',
        administrador: true
      },
      {
        nome: 'Claudio',
        administrador: true
      }
    ],
    tarefas: [
      {
        tarefa: 'Levar o lixo para fora',
        responsaveis: ['Renato']
      },
      {
        tarefa: 'Faxina na casa',
        responsaveis: ['Claudio','Renato']
      },
      {
        tarefa: 'Lavar o banheiro',
        responsaveis: ['Carlos']
      }
    ],
    acomodacoes: [
      {
        moradores: [],
        mobilia: 'não',
        lugares: 2,
        suite: 'não'
      },
      {
        moradores: ['Claudio','Renato'],
        mobilia: 'completo',
        lugares: 2,
        suite: 'sim'
      },
      {
        moradores: ['Carlos'],
        mobilia: 'armário sem cama',
        lugares: 2,
        suite: 'não'
      }
    ]
  }