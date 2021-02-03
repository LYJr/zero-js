const logger = function (idx, time) {
  return new Promise(function (resolver, reject) {
    //resolver = 완벽하게 이행됐을때 마지막에 호출되는애, 리젝트는 에러났을 때 반환값.
    const isFlag = true;
    if (isFlag) {
      setTimeout(function () {
        console.log(idx);
        resolver("good"); //고급형으로 쓰고 싶다면 파라미터를 넘길 수 있는데.
      }, time);
    } else {
      reject("not good");
    }
  });
};

const main = async function () {
  //여기서 promise를 못 받아줘서 2,3,1이 출력됨.
  //자동적으로 오래 걸리는 애를 늦게 처리하고 빨리 처리하는걸 우선 처리하는게 있어서 이따위가 된거임.
  //노드 js의 장점이라고 어필되긴하는데 비동기로 처리하려면 async랑 promise로 처리가능.

  await logger(1, 2000).then(function (result) {
    //result에 뭐든 넘길 수 있음 (예 : json)
    console.log(result);
  });
  //await 무조건 이걸 호출될 때 까지 기다리겠다는 함수.
  await logger(2, 1000).catch(function (err) {
    console.log(err);
  });
  //then() 로거 함수가 정상 실행 했을 때 무조건 실행을 보장해주는 체이닝 -> 이것만 트라이 캐치에서 벗어난 것.
  //catch -> 트라이 캐치의 캐치 에러 함수와 같음.
  await logger(3, 1500);
};

main();

// 프로미스 반환은 비동기라 async와 같은 역활을 할 수 있음. async는 결국 프로미스를 반환하다보니 main은 promise를 반환하는데
// async == promise 무조건 반환
