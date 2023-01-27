module.exports = (sequelize, Sequelize) => {
    class Board extends Sequelize.Model {
      static createTable() {
        return this.init(
          {
            subject: {
              type: Sequelize.STRING(100),
              allowNull: false,
            },
            content: {
              type: Sequelize.TEXT,
              allowNull: false,
            },
            hit: {
              type: Sequelize.INTEGER,
              defaultValue: 0,
            },
          },
          {
            sequelize,
            timestamps: true
          }
        );
      }
      static associate(models) {
        this.belongsTo(models.User, {
          foreignKey: "userid"
        })
        this.hasMany(models.Comment, {
          foreignKey: "boardid",
        })
        this.belongsToMany(models.User, {
          through: "Liked",
          foreignKey: "boardid",
        })
        this.belongsToMany(models.Hash, {
          through: "Hashtag",
          foreignKey: 'boardid',
        })
        this.hasMany(models.Liked, {
          foreignKey: 'boardid',
        })
      }
    }
    Board.createTable();
    return Board;
  };
