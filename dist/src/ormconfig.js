"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORMConfig = void 0;
exports.ORMConfig = {
    type: 'mysql',
    host: 'sql.freedb.tech',
    port: 3306,
    username: 'freedb_accordion_shop_user',
    password: 'TGUfsJrZ4!mya!E',
    database: 'freedb_accordion_shop_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=ormconfig.js.map