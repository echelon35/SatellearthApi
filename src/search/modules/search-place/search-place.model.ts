import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'search_places',
  freezeTableName: true,
})
export class SearchPlace extends Model {
  @Column(DataType.STRING)
  searchExpression: string;
  //Id selectionné par le user suite à sa recherche. Forcément vide au moment de la saisie
  //Dans l'idéal il doit y avoir autant ou plus de providerIdSelected non vide que vide.
  //Cela permettra de déterminer quelles sont les recherches d'utilisateur non trouvées
  @Column(DataType.STRING)
  providerIdSelected: string;
}
