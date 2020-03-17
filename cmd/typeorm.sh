
typeorm schema:log

typeorm migration:generate -n UserMigration

typeorm migration:run

typeorm cache:clear
