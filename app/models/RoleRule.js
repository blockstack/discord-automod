var Model = require('../lib/db')

class RoleRule extends Model {
  static get tableName() {
    return 'role_rules'
  }

  static get relationMappings() {
    return {
    }
  }

  $beforeUpdate(opt,quetyContext) {
    this.updated_at = new Date().toISOString()
  }

  $beforeInsert() {
    this.updated_at, this.created_at = new Date().toISOString()
  }

  static getSearchable() {
    return [
    ]
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
      }
    }
  }

  static get modelPaths() {
    return [__dirname]
  }
}

module.exports = RoleRule
