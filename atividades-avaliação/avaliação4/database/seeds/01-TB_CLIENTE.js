/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

  // Deletes ALL existing entries
//  await knex('TB_CLIENTE').del()
 // await knex('TB_CLIENTE').insert([
  //  {id: 1, colName: 'rowValue1'},
   // {id: 2, colName: 'rowValue2'},
   // {id: 3, colName: 'rowValue3'}
 // ]);
//};
  // Inserts seed entries
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('TB_CLIENTE').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('TB_CLIENTE').insert([
          {id: 1, codigo: '605', cnpjcpf: 'euuuu', nome: "joao", TipoCliente: "Pessoa_Fisica"},
          {id: 2, codigo: '407', cnpjcpf: '0490', nome: "rodrigo", TipoCliente: "Pessoa_Fisica"},
          {id: 3, codigo: '012', cnpjcpf: '6053', nome: "Lya", TipoCliente: "Pessoa_Fisica"},
        ]);
      });
  };
