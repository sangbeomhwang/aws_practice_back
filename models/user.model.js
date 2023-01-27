
module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static createTable() {
      return this.init(
        {
          userid: {
            type: Sequelize.STRING(16),
            primaryKey: true,
            validate: {
              is: /^[A-Za-z0-9]{6,16}$/,
            },
          },
          username: {
            type: Sequelize.STRING(16),
            allowNull: false,
            validate: {
              is: /^[A-Za-z가-힣0-9]{2,16}$/,
            },
          },
          userpw: {
            type: Sequelize.STRING(64),
            allowNull: false,
          },
          gender: {
            type: Sequelize.ENUM("male", "female"),
            defaultValue: "male",
            allowNull: false,
          },
          birth: {
            type: Sequelize.DATEONLY,
            validate: {
              isAfter: '1900-01-01',
              isBefore: '2010-01-02'
            }
          },
          phoneNumber: {
            type: Sequelize.STRING(11),
            validate: {
              is: /^010[0-9]{8}$/,
            },
          },
          email: {
            type: Sequelize.STRING(30),
            validate: {
              isEmail: true
            },
          },
          provider: {
            type: Sequelize.ENUM("local", "kakao"),
            allowNull: false,
            defaultValue: "local",
          },
          snsId: {
            type: Sequelize.STRING(30),
            allowNull: true,
          },
        },
        {
          sequelize,
        }
      );
    }
    // static associate(models) {
    //   this.hasMany(models.Board, {
    //     foreignKey: "userid",
    //   });
    //   this.hasMany(models.Comment, {
    //     foreignKey: "userid",
    //   });
    //   this.belongsToMany(models.Board, {
    //     through: "Liked",
    //     foreignKey: "userid",
    //   });
    // }
  }
  User.createTable();
};












// CREATE TABLE User (
//   userid VARCHAR(16) NOT NULL,
//   username VARCHAR(16) NOT NULL,
//   gender ENUM('male', 'female') NOT NULL DEFAULT 'male',
//   birth DATE NOT NULL,
//   phoneNumber INTEGER(11) NOT NULL,
//   email VARCHAR(30) NOT NULL,
//   userpw VARCHAR(64) NOT NULL,
//   provider ENUM('local', 'kakao') NOT NULL DEFAULT 'local',
//   snsId VARCHAR(30),
//   PRIMARY KEY (userid)
//   );

//   ALTER TABLE User
  // ADD CONSTRAINT userid_format CHECK (userid REGEXP '^[A-Za-z0-9]+$'),
  // ADD CONSTRAINT username_format CHECK (username REGEXP '^[A-Za-z가-힣]+$'),
  // ADD CONSTRAINT phoneNumber_format CHECK (phoneNumber REGEXP '^010[0-9]{8}$'),
  // ADD CONSTRAINT birth_range CHECK (birth BETWEEN '1900-01-01' AND '2010-01-01');
  // ADD CONSTRAINT email_format CHECK (email REGEXP '^[A-Za-z0-9]+@[A-Za-z0-9.-_]{1,10}+.[A-Za-z]{2,4}$');

// // ADD CONSTRAINT : 제약조건 추가
// // CHECK : 제약조건 정의








