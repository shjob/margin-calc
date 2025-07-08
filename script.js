document.getElementById('margin-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const cost = parseFloat(document.getElementById('cost').value);
  const price = parseFloat(document.getElementById('price').value);
  const fee = parseFloat(document.getElementById('fee').value);
  const resultDiv = document.getElementById('result');

  // 입력 검증
  if (isNaN(cost) || isNaN(price) || isNaN(fee)) {
    resultDiv.innerHTML = '<p style="color: red;">모든 값을 입력해주세요.</p>';
    return;
  }
  if (cost < 0 || price < 0 || fee < 0) {
    resultDiv.innerHTML = '<p style="color: red;">음수 값은 입력할 수 없습니다.</p>';
    return;
  }

  // 계산 로직
  const feeAmount = price * (fee / 100);
  const profit = price - cost - feeAmount;
  const margin = (profit / price) * 100;

  // 결과 출력
  resultDiv.innerHTML = `
    <p>수수료: ${feeAmount.toFixed(2)} 엔</p>
    <p>순이익: ${profit.toFixed(2)} 엔</p>
    <p>마진율: ${margin.toFixed(2)} %</p>
  `;
});