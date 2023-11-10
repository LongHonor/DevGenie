INSERT INTO quiz (tag, quiz_content, quiz_answer)
VALUES ('DATABASE','데이터베이스의 특징에 대해 설명해주세요', '비정형적인 질의에 대해 실시간 처리에 의한 응답이 가능해야하며, 데이터베이스는 항상 최신의 데이터를 유지해야합니다. 데이터베이스는 다수의 사용자가 동시에 같은 내용의 데이터를 이용할 수 있어야하며, 데이터를 참조할 때 데이터의 주소나 위치에 의해서가 아니라 사용자가 요구하는 데이터 내용으로 찾을 수 있어야합니다.'),
       ('DATABASE','데이터베이스 언어 DDL, DML, DCL에 대해 설명해주세요', 'DDL은 데이터베이스 구조를 정의, 수정, 삭제하는 언어, DML은 데이터베이스내의 자료 검색, 삽입, 갱신, 삭제를 위한 언어, DCL은 데이터에 대해 무결성 유지, 병행 수행 재어, 보호와 관리를 위한 언어입니다.'),
       ('DATABASE', '트리거에 대해 설명해주세요', '트리거는 특정 테이블에 대한 이벤트에 반응해 DML 문이 수행 되었을 때 데이터베이스에서 자동으로 동작하도록 작성된 프로그램입니다. 사용자가 직접 호출하는 것이 아니라 데이터베이스가 자동으로 호출한다는 것이 가장 큰 특징입니다.'),
       ('DATABASE', 'Index의 정의와 장단점을 설명해주세요.', 'Index란 인덱스를 검색하여 해당 자료의 테이블을 엑세스 하는 방법입니다. 인덱스는 항상 정렬된 상태를 유지하기 때문에 원하는 값을 검색하는 것이 빠르다는 장점이 있지만, 새로운 값을 추가하거나 삭제, 수정하는 경우에는 쿼리문 실행 속도가 느려지는 단점이 있습니다.'),
       ('DATABASE', '정규화에 대해 설명해주세요', '하나의 릴레이션에 하나의 의미만 존재하도록 릴레이션을 분해하는 과정이며, 데이터의 일관성, 최소한의 데이터 중복, 최대한의 데이터 유연성을 가지도록하는 방법입니다. 정규화에는 4가지 정규형이 있습니다. 제1 정규형은 테이블의 컬럼이 하나의 값을 갖도록 분해하도록 하는 형태이고, 제2 정규형은 제1 정규형을 만족하고, 기본키가 아닌 속성이 기본키에 완전 함수 종속이도록 분해한 형태입니다. 제3 정규형은 제2 정규형을 만족하고, 이행적 함수 종속을 없애도록 분해한 형태입니다. 마지막으로 BCNF 정규형은 제3 정규형을 만족하고, 함수 종속성이 성립할 때 모든 결정자가 후보키가 되도록 분해한 정규형입니다.'),
       ('DATABASE', '정규화의 장단점을 설명해주세요', '장점으로는 데이터베이스 변경 시 이상현상이 발생하는 문제점을 해결할 수 있다는 점과 정규화된 데이터베이스를 구조 확장 할 시에 그 구조를 변경하지 않아도 되거나 일부만 변경해도 된다는 점이 있습니다. 단점으로는 릴레이션의 분해로 인해 릴레이션 간의 JOIN연산이 많아지기 때문에 질의에 대한 응답시간이 느려질 수 있다는 점이 있습니다.'),
       ('DATABASE', 'RDBMS와 NoSQL은 어느 경우에 적합한가요?', 'RDBMS는 데이터 구조가 명확하고, 변경 될 여지가 없으며 스키마가 중요한 경우에 사용하는 것이 좋습니다 또한 중복된 데이터가 없어 변경이 용이하기 때문에 관계를 맺고 있는 데이터가 자주 변경이 이루어지는 시스템에 적합합니다. 반면 NoSQL은 정확한 데이터 구조를 알 수 없고 데이터가 변경/확장 될 수 있는 경우 사용하는 것이 좋습니다. 또한 데이터 중복이 발생할 수 있으며 중복된 데이터가 변경될 시 모든 컬렉션에서 수정해야 하기 때문에 갱신이 많이 이루어지지 않는 시스템에 적합합니다.'),
       ('DATABASE', '트랜잭션이란 무엇인지 설명해주세요.', '트랜잭션은 작업의 완전성을 보장해줍니다. 작업들이 모두 처리되거나 처리되지 못할 경우 이전 상태로 복구하여 작업의 일부만 적용되는 현상을 방지해주는 기능입니다. 하나의 트랜잭션은 commit되거나 rollback됩니다.'),
       ('DATABASE', '트랜잭션의 특성에 대해 설명해주세요', '작업이 모두 반영되던지 아니면 하나도 반영되지 않아야한다는 원자성, 실행이 완료되면 언제나 일관성 있는 상태를 유지해야한다는 일관성, 둘 이상 트랜잭션이 동시에 실행될 경우 서로의 연산에 끼어들 수 없다는 독립성, 완료된 결과는 영구적으로 반영되어야한다는 영구성 4가지가 있습니다.'),
       ('DATABASE', '데이터베이스 락에 대해 설명해주세요', '데이터베이스 락은 트랜잭션 처리의 순차성을 보장하기 위한 방법입니다. 공유락은 트랜잭션이 읽기를 할 때 사용하는 락이며, 데이터를 읽기만하기 때문에 같은 공유락 끼리는 동시에 접근이 가능합니다. 베타락은 데이터를 변경할 때 사용하는 락입니다. 트랜잭션이 완료될 때까지 유지되며, 베타락이 끝나기 전까지 어떠한 접근도 허용하지 않습니다.');