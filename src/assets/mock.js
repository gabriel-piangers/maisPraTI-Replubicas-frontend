export const morador = 'Renato'

export  const mock = {
    expenses: [
      {
        type: 'Aluguel',
        dueDate: 10,
        total: 2100,
        payments: [
          ['Claudio', 700]
        ]
      },
      {
        type: 'Condominio',
        dueDate: 10,
        total: 500,
        payments: []
      },
      {
        type: 'Energia',
        dueDate: 8,
        total: 210.47,
        payments: [
          ['Carlos', 210.47]
        ]
      },
      {
        type: 'Mantimentos',
        dueDate: 4,
        total: 420,
        payments: [
          ['Renato', 420]
        ], 
      }
    ],
    residents: [
      {
        name: 'Carlos',
        administrator: false
      },
      {
        name: 'Renato',
        administrator: true
      },
      {
        name: 'Claudio',
        administrator: true
      }
    ],
    rooms: [
      {
        residents: [],
        furniture: 'não',
        beds: 2,
        suite: 'não'
      },
      {
        residents: ['Claudio','Renato'],
        furniture: 'completo',
        beds: 2,
        suite: 'sim'
      },
      {
        residents: ['Carlos'],
        furniture: 'armário sem cama',
        beds: 2,
        suite: 'não'
      }
    ]
  }