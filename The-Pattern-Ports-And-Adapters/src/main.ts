//Adapter
class UI {
  constructor(private readonly discounter: Discounter) {}

  show() {
    const input = 100
    console.log('Input: ', input)    
    console.log('Your discount: ', this.discounter.discount(input))
  }
}

//User Port
interface Discounter {
  discount(amount: number): number
}

//Application
class DiscounterImpl implements Discounter {
  constructor(private readonly rateRepository: Repository) {}
  
  discount(amount: number): number {
    return amount * this.rateRepository.getRate()
  }
}

//Database Port
interface Repository {
  getRate(): number
}

//Adapter
class MockRateRepository implements Repository {
  getRate(): number {
    return 0.1
  }
}

const rateRepository = new MockRateRepository()
const discounter = new DiscounterImpl(rateRepository)
const ui = new UI(discounter)
ui.show()