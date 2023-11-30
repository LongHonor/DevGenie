const content = [
  {
    quizId: 14,
    quizContent: '정규화의 장단점을 설명해주세요',
    quizAnswer:
      '장점으로는 데이터베이스 변경 시 이상현상이 발생하는 문제점을 해결할 수 있다는 점과 정규화된 데이터베이스를 구조 확장 할 시에 그 구조를 변경하지 않아도 되거나 일부만 변경해도 된다는 점이 있습니다. 단점으로는 릴레이션의 분해로 인해 릴레이션 간의 JOIN연산이 많아지기 때문에 질의에 대한 응답시간이 느려질 수 있다는 점이 있습니다.',
    tag: 'DATABASE',
    memberQuizId: 12,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-01-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_0',
  },
  {
    quizId: 6,
    quizContent: 'Tree와 Heap의 구조에 대해 설명해주세요.',
    quizAnswer:
      'Tree는 스택과 큐와 같은 선형 구조가 아닌 비선형 자료구조이며, 계층적 관계를 표현하기에 적합합니다.Heap은 최댓값 또는 최솟값을 찾아내는 연산을 쉽게 하기 위해 고안된 구조로,각 노드의 키값이 자식의 키값보다 작지 않거나(최대힙) 그 자식의 키값보다 크지 않은(최소힙) 완전이진트리 입니다.',
    tag: 'DATA_STRUCTURE',
    memberQuizId: 6,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-01-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_0',
  },
  {
    quizId: 5,
    quizContent: '버블 정렬(Bubble Sort)에 대해 설명해주세요.',
    quizAnswer:
      '버블 정렬는 서로 인접한 두 원소를 비교하여 정렬하는 알고리즘입니다. 0번 인덱스부터 n-1번 인덱스까지 n번까지의 모든 인덱스를 비교하며 정렬합니다. 시간 복잡도는 O(n^2)입니다.',
    tag: 'ALGORITHM',
    memberQuizId: 3,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-01-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_0',
  },
];

const contentone = [
  {
    quizId: 9,
    quizContent: 'Index의 정의와 장단점을 설명해주세요.',
    quizAnswer:
      'Index란 인덱스를 검색하여 해당 자료의 테이블을 엑세스 하는 방법입니다. 인덱스는 항상 정렬된 상태를 유지하기 때문에 원하는 값을 검색하는 것이 빠르다는 장점이 있지만, 새로운 값을 추가하거나 삭제, 수정하는 경우에는 쿼리문 실행 속도가 느려지는 단점이 있습니다.',
    tag: 'DATABASE',
    memberQuizId: 9,
    submissionAnswer:
      'Index는 테이블의 엑세스 방법이 아니라, 데이터를 정렬하는 방법입니다.',
    feedback:
      "틀린 부분은 'Index는 테이블의 엑세스 방법이 아니라, 데이터를 정렬하는 방법입니다.'이고, 올바르게는 'Index란 인덱스를 검색하여 해당 자료의 테이블을 엑세스 하는 방법입니다.'입니다.",
    point: null,
    solvedDateTime: '2023-11-29T17:51:42.285457',
    oblivionStatus: 'OBLIVION_STATUS_1',
  },
  {
    quizId: 27,
    quizContent: 'Stack과 Queue의 구조에 대해 설명해주세요.',
    quizAnswer:
      'Stack과 Queue는 선형 자료구조의 일종이며, Array와 LinkedList로 구현할 수 있습니다.Stack은 후입선출(LIFO)방식 즉, 나중에 들어간 원소가 먼저 나오는 구조이고 Queue는 선입선출(FIFO)방식 즉, 먼저 들어간 원소가 먼저 나오는 구조를 갖습니다.',
    tag: 'DATA_STRUCTURE',
    memberQuizId: 27,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-12-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_1',
  },
];

const contenttwo = [
  {
    quizId: 23,
    quizContent: 'Stack과 Queue의 구조에 대해 설명해주세요.',
    quizAnswer:
      'Stack과 Queue는 선형 자료구조의 일종이며, Array와 LinkedList로 구현할 수 있습니다.Stack은 후입선출(LIFO)방식 즉, 나중에 들어간 원소가 먼저 나오는 구조이고 Queue는 선입선출(FIFO)방식 즉, 먼저 들어간 원소가 먼저 나오는 구조를 갖습니다.',
    tag: 'DATA_STRUCTURE',
    memberQuizId: 4,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-12-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_2',
  },
];

const contentthree = [
  {
    quizId: 7,
    quizContent: '트리거에 대해 설명해주세요',
    quizAnswer:
      '트리거는 특정 테이블에 대한 이벤트에 반응해 DML 문이 수행 되었을 때 데이터베이스에서 자동으로 동작하도록 작성된 프로그램입니다. 사용자가 직접 호출하는 것이 아니라 데이터베이스가 자동으로 호출한다는 것이 가장 큰 특징입니다.',
    tag: 'DATABASE',
    memberQuizId: 7,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-12-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_3',
  },

  {
    quizId: 15,
    quizContent: 'Array와 ArrayList의 차이점에 대해 설명해주세요.',
    quizAnswer:
      'Array는 크기가 고정적이고, ArrayList는 크기가 가변적입니다.Array는 초기화 시 메모리에 할당되어 ArrayList보다 속도가 빠르고,ArrayList는 데이터 추가 및 삭제 시 메모리를 재할당하기 때문에 속도가 Array보다 느립니다.',
    tag: 'DATA_STRUCTURE',
    memberQuizId: 5,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-12-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_3',
  },
];

const contentfour = [
  {
    quizId: 2,
    quizContent: '대칭키, 비대칭키 암호화 방식에 대해 설명해주세요.',
    quizAnswer:
      '대칭키는 암호화와 복호화에 같은 암호 키를 쓰는 알고리즘입니다.비대칭키는 암호화와 복호화할 때 키를 서로 다른 키로 사용하는 암호화 알고리즘입니다.',
    tag: 'NETWORK',
    memberQuizId: 11,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-12-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_4',
  },
  {
    quizId: 4,
    quizContent: '프로세스와 쓰레드의 차이에 대해 설명해주세요.',
    quizAnswer:
      '프로세스는 실행 중인 프로그램을 말하며, 완벽히 독립적이기 때문에 메모리 영역(Code, Data, Heap, Stack)을 다른 프로세스와 공유하지 않습니다. 프로세스는 최소 1개의 쓰레드(메인 쓰레드)를 가지고 있습니다.쓰레드는 프로세스 내에서 Stack만 따로 할당 받고, 그 이외의 메모리 영역(Code, Data, Heap)영역을 공유하기 때문에 다른 쓰레드의 실행 결과를 즉시 확인할 수 있습니다. 쓰레드는 프로세스 내에 존재하며 프로세스가 할당받은 자원을 이용하여 실행됩니다.',
    tag: 'OPERATING_SYSTEM',
    memberQuizId: 10,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-12-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_4',
  },

  {
    quizId: 12,
    quizContent: '정규화에 대해 설명해주세요',
    quizAnswer:
      '하나의 릴레이션에 하나의 의미만 존재하도록 릴레이션을 분해하는 과정이며, 데이터의 일관성, 최소한의 데이터 중복, 최대한의 데이터 유연성을 가지도록하는 방법입니다. 정규화에는 4가지 정규형이 있습니다. 제1 정규형은 테이블의 컬럼이 하나의 값을 갖도록 분해하도록 하는 형태이고, 제2 정규형은 제1 정규형을 만족하고, 기본키가 아닌 속성이 기본키에 완전 함수 종속이도록 분해한 형태입니다. 제3 정규형은 제2 정규형을 만족하고, 이행적 함수 종속을 없애도록 분해한 형태입니다. 마지막으로 BCNF 정규형은 제3 정규형을 만족하고, 함수 종속성이 성립할 때 모든 결정자가 후보키가 되도록 분해한 정규형입니다.',
    tag: 'DATABASE',
    memberQuizId: 8,
    submissionAnswer: '입력된 답변',
    feedback: '피드백',
    point: null,
    solvedDateTime: '2023-12-11T20:20:40.389208',
    oblivionStatus: 'OBLIVION_STATUS_4',
  },
];

export { content, contentone, contenttwo, contentthree, contentfour };
