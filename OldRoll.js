// OldRoll - Lifetime VIP unlock
// Compatible with Egern / Surge / Quantumult X

let body = {
  status: 0,
  environment: "Production",
  receipt: {
    receipt_type: "Production",
    adam_id: 1570093460,
    app_item_id: 1570093460,
    bundle_id: "com.zijayrate.analogcam",
    application_version: "8.4.5",
    download_id: 501017651398874591,
    version_external_identifier: 847082545,
    receipt_creation_date: "2024-01-01 12:00:00 Etc/GMT",
    receipt_creation_date_ms: "1704110400000",
    receipt_creation_date_pst: "2024-01-01 04:00:00 America/Los_Angeles",
    request_date: "2024-01-01 12:00:00 Etc/GMT",
    request_date_ms: "1704110400000",
    request_date_pst: "2024-01-01 04:00:00 America/Los_Angeles",
    original_purchase_date: "2021-12-30 15:44:40 Etc/GMT",
    original_purchase_date_ms: "1640879080000",
    original_purchase_date_pst: "2021-12-30 07:44:40 America/Los_Angeles",
    original_application_version: "2.7.0",
    in_app: [
      {
        quantity: "1",
        product_id: "com.zijayrate.analogcam.vipforever10",
        transaction_id: "360001014993384",
        original_transaction_id: "360001014993384",
        purchase_date: "2021-12-30 15:50:29 Etc/GMT",
        purchase_date_ms: "1640879429000",
        purchase_date_pst: "2021-12-30 07:50:29 America/Los_Angeles",
        original_purchase_date: "2021-12-30 15:50:29 Etc/GMT",
        original_purchase_date_ms: "1640879429000",
        original_purchase_date_pst: "2021-12-30 07:50:29 America/Los_Angeles",
        is_trial_period: "false",
        in_app_ownership_type: "PURCHASED"
      }
    ]
  },
  latest_receipt_info: [
    {
      quantity: "1",
      product_id: "com.zijayrate.analogcam.vipforever10",
      transaction_id: "360001014993384",
      original_transaction_id: "360001014993384",
      purchase_date: "2021-12-30 15:50:29 Etc/GMT",
      purchase_date_ms: "1640879429000",
      purchase_date_pst: "2021-12-30 07:50:29 America/Los_Angeles",
      original_purchase_date: "2021-12-30 15:50:29 Etc/GMT",
      original_purchase_date_ms: "1640879429000",
      original_purchase_date_pst: "2021-12-30 07:50:29 America/Los_Angeles",
      is_trial_period: "false",
      in_app_ownership_type: "PURCHASED"
    }
  ],
  latest_receipt: "OldRoll-VIP-Lifetime"
};

$done({ body: JSON.stringify(body) });
