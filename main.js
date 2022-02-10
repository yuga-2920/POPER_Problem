window.onload = function () {
    document.getElementById('fee_calculation').onclick = function () {

        // 入力内容の取得
        let unit_price = document.getElementById('unit_price').value;
        let quantity = document.getElementById('quantity').value;
        let discount_method = document.getElementById('discount_method').value;
        let discount_fee_rate = document.getElementById('discount_fee_rate').value;
        let sales_tax = document.getElementById('sales_tax').value;

        // 空判定
        if (!unit_price || !quantity || !discount_fee_rate) {
            alert('入力していない項目があります');
            return false;
        }

        let product_fee = unit_price * quantity;

        // 割引方法による処理
        if (discount_method == 'discount_fee') {
            if (discount_fee_rate > product_fee) {
                alert('割引額が商品価格を超えています');
                return false;
            }

            product_fee -= discount_fee_rate;
        }
        else if (discount_method == 'discount_rate') {
            if (discount_fee_rate > 100) {
                alert('割引率が100%を超えています');
                return false;
            }

            product_fee *= 1 - 0.01 * discount_fee_rate;
        }

        // 消費税の計算
        product_fee *= 1 + 0.01 * sales_tax;
        product_fee = Math.round(product_fee);

        // 結果の出力
        let result_product_fee = document.getElementById('result_product_fee');
        result_product_fee.innerHTML = '合計' + product_fee + '円です';
    }
}