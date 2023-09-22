import { Domain } from "./Domain"
import { Repository } from "./Repository"

export class DomainImpl implements Domain {
  constructor(private readonly repository: Repository<number, object>) {}

  someBusinessRule() {
    const obj = this.repository.find(0)
    if (obj) {      
      console.log('doing something')      
    }
    
    console.log('do other thing')    
  }
}
