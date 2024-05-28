try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
} finally {
  console.log(
    'try 코드 블록이 정상적으로 수행되든, 오류를 발생시키든 상관없이 무조건 실행'
  );
}
