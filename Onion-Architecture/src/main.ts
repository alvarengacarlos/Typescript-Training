import { DomainImpl } from "./core/DomainImpl"
import { RepositoryImpl } from "./external/RepositoryImpl"
import { UI } from "./external/UI"

const repository = new RepositoryImpl()
const domain = new DomainImpl(repository)
const ui = new UI(domain, repository)

ui.clickToCreate()
ui.clickToDoSomeThing()