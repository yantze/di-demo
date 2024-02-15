import 'reflect-metadata';
import { Injector, Injectable, Autowired } from '@opensumi/di';

@Injectable()
class Dog {

  say() {
    return 'wangwang';
  }
}

@Injectable()
class World {

  @Autowired()
  dog: Dog;

  hello() {
    console.log('hello world');
    console.log(this.dog.say());
  }
}

async function main() {
  const injector = new Injector([Dog, World]);
  const world = injector.get(World);
  world.hello();
}

main().catch(console.error);
