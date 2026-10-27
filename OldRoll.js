// OldRoll VIP Unlock - versión más completa
// Egern / Surge / Quantumult X

const productIds = [
  "com.zijayrate.analogcam.vipforever10",
  "com.zijayrate.analogcam.vipforever2",
  "com.zijayrate.analogcam.vipforever",
  "VIP-Forever",
  "vip forever",
  "VIP|Forever",
  "VIP-Forever-1",
  "VIP-Forever-2",
  "VIP-Forever-3"
];

const now = Date.now();
const farFuture = 4092599349000; // ~2099

function makeItem(pid) {
  return {
    quantity: "1",
    product_id: pid,
    transaction_id: "360001014993384",
    original_transaction_id: "360001014993384",
    purchase_date: "2021-12-30 15:50:29 Etc/GMT",
    purchase_date_ms: "1640879429000",
    purchase_date_pst: "2021-12-30 07:50:29 America/Los_Angeles",
    original_purchase_date: "2021-12-30 15:50:29 Etc/GMT",
    original_purchase_date_ms: "1640879429000",
    original_purchase_date_pst: "2021-12-30 07:50:29 America/Los_Angeles",
    expires_date: "2099-09-09 13:37:37 Etc/GMT",
    expires_date_ms: String(farFuture),
    expires_date_pst: "2099-09-09 06:06:06 America/Los_Angeles",
    is_trial_period: "false",
    is_in_intro_offer_period: "false",
    in_app_ownership_type: "PURCHASED",
    web_order_line_item_id: "360000123456789"
  };
}

const items = productIds.map(makeItem);

const body = {
  status: 0,
  environment: "Production",
  receipt: {
    receipt_type: "Production",
    adam_id: 1570093460,
    app_item_id: 1570093460,
    bundle_id: "com.zijayrate.analogcam",
    application_version: "8.8.2",
    download_id: 501017651398874591,
    version_external_identifier: 847082545,
    receipt_creation_date: "2024-01-01 12:00:00 Etc/GMT",
    receipt_creation_date_ms: "1704110400000",
    receipt_creation_date_pst: "2024-01-01 04:00:00 America/Los_Angeles",
    request_date: "2024-01-01 12:00:00 Etc/GMT",
    request_date_ms: String(now),
    request_date_pst: "2024-01-01 04:00:00 America/Los_Angeles",
    original_purchase_date: "2021-12-30 15:44:40 Etc/GMT",
    original_purchase_date_ms: "1640879080000",
    original_purchase_date_pst: "2021-12-30 07:44:40 America/Los_Angeles",
    original_application_version: "2.7.0",
    in_app: items
  },
  latest_receipt_info: items,
  latest_receipt: "OldRoll-VIP-Lifetime",
  pending_renewal_info: productIds.map(pid => ({
    auto_renew_product_id: pid,
    product_id: pid,
    original_transaction_id: "360001014993384",
    auto_renew_status: "1"
  }))
};

$done({ body: JSON.stringify(body) });
