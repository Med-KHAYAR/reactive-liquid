declare type address={
        address1: string,
        address2: string,
        city: string,
        company: string,
        country: country,
        country_code: string,
        first_name: string,
        id: number,
        last_name: string,
        name: string,
        phone: string,
        province: string,
        province_code: "ON"|"OFF",
        street: string,
        summary: string,
        url: string,
        zip: string
    }

declare type metafield={
    list?: boolean,
    type: string,
    value:string
  }

declare type market={
    handle: string,
    id: number,
    metafields: metafield[]
}

declare type currency={
    iso_code: string,
    name: string,
    symbol: string
}

declare type country={
    currency: currency,
    iso_code: string,
    market: market,
    name: string,
    unit_system: string
}

declare type comment={
    author: string,
    content: string,
    created_at: string,
    email: string,
    id: number,
    status: string,
    updated_at: string,
    url: string
  }

  declare type focal_point={
    x:number,
    y:number
  }

  declare type image_presentation={
    focal_point: focal_point
  }
  declare type image={
    alt: string,
    aspect_ratio: number,
    attached_to_variant?: boolean,
    height: number,
    id: number,
    position: number,
    presentation?:image_presentation,
    preview_image?: image,
    product_id: number,
    src: string,
    variants: variant[],
    width: number
  }
  declare type media ={
    alt:string,
    id:number,
    media_type:string,//to verify
    position:number,
    preview_image:image,
  } & (image | model | video | external_video)

  declare type external_video={
    alt:string,
    aspect_ratio:number,
    external_id:string,
    host:string,//to verify
    id:number,
    media_type:string,
    position:number,
    preview_image:image

  }
  declare type video={
    alt:string,
    aspect_ratio:number,
    duration:number,
    id:number,
    media_type:string,//to verify
    position:number,
    preview_image:image,
    sources:video_source[]
  }
  declare type video_source={
    format:string,
    height:number,
    mime_type:string,
    url:string,
    width:number
  }

  declare type model={
    alt:string,
    id:number,
    media_type:string,//to verify
    position:number,
    preview_image:image,
    sources:module_source[]
  }

  declare type module_source={
    format:string,
    mime_type:string,
    url:string
  }

  declare type quantity_rule={
    increment:number,
    max:number,
    min:number
  }
  declare type store_availability={
    available:boolean,
    location:location,
    pick_up_enabled:boolean,
    pick_up_time:string
  }
  declare type location={
    address:address,
    id:number,
    latitude:number,
    longitude:number,
    metafields:metafield[],
    name:string
  }
  declare type unit_price_measurement={
    measured_type:string,//to verify
    quantity_unit:string,
    quantity_value:number,
    reference_unit:string,
    reference_value:number
  }
  declare type selling_plan_allocation={
    checkout_charge_amount:number,
    compare_at_price:number,
    per_delivery_price:number,
    price:number,
    price_adjustments:selling_plan_allocation_price_adjustment[],
    remaining_balance_charge_amount:number,
    selling_plan:selling_plan,
    selling_plan_group_id:string,
    unit_price:number
  }
  declare type selling_plan_allocation_price_adjustment={
    position:number,
    price:number
  }
  declare type selling_plan={
    checkout_charge:selling_plan_checkout_charge,
    description:string,
    group_id:string,
    id:number,
    name:string,
    options:selling_plan_option[],
    price_adjustments:selling_plan_price_adjustment[],
    recurring_deliveries:boolean,
    selected:boolean
  }
  declare type selling_plan_price_adjustment={
    order_count:number,
    position:number,
    value:number,
    value_type:string//to verify
  }
  declare type selling_plan_option={
    name:string,
    position:number,
    value:string
  }
  declare type selling_plan_checkout_charge={
    value:number,
    value_type:string//to verify
  }

  declare type variant={
    available:boolean,
    barcode:string,
    compare_at_price:number,
    featured_image:image,
    featured_media:media,
    id:number,
    image:image,
    incoming:boolean,
    inventory_management:string,
    inventory_policy:string,//to verify
    inventory_quantity:number,
    matched:boolean,
    metafields:metafield[],
    next_incoming_date:string,
    option1:string,
    option2:string
    option3:string
    options:string,
    price:number,
    product:product,
    quantity_rule:quantity_rule,
    requires_selling_plan:boolean,
    requires_shipping:boolean
    selected:boolean,
    selected_selling_plan_allocation:selling_plan_allocation,
    selling_plan_allocations:selling_plan_allocation[],
    sku:string,
    store_availabilities:store_availability[],
    taxable:boolean,
    title:string,
    unit_price:number,
    unit_price_measurement:unit_price_measurement,
    url:string,
    weight:number,
    weight_in_unit:number,
    weight_unit:string
  }
  declare type product_option={
    name:string,
    position:number,
    selected_value:string,
    values:string[]
  }

  declare type selling_plan_group={
    app_id:string,
    id:number,
    name:number,
    options:selling_plan_group_option[],
    selling_plan_selected:boolean,
    selling_plans:selling_plan[]
  }
  declare type selling_plan_group_option={
    name:string,
    position:number,
    selected_value:string,
    values:string[]
  }
  declare type filter_value={
    active:boolean,
    count:number,
    label:string,
    param_name:string,
    url_to_add:string,
    url_to_remove:string,
    value:string
  }
  declare type filter={
    active_values:filter_value[],
    false_value:filter_value,
    inactive_values:filter_value[],
    label:string,
    max_value:filter_value,
    min_value:filter_value,
    param_name:string,
    range_max:number,
    true_value:filter_value,
    type:string,// to verify 
    url_to_remove:string,
    values:filter_value[]
  }
  declare type sort_option={
    name:string,
    value:string
  }
  declare type collection={
    all_products_count:number,
    all_tags:string[],
    all_types:string[],
    all_vendors:string[],
    current_type:string,
    current_vendor:string,
    default_sort_by:string[],//to verify
    description:string,
    featured_image:image,
    filters:filter[],
    handle:string,
    id:number,
    image:image,
    metafields:metafield[],
    next_product:product,
    previous_product:product,
    products:product[],
    products_count:number,
    published_at:string,
    sort_by:string,
    sort_options:sort_option[],
    tags:string[],
    template_suffix:string,
    title:string,
    url:string
  }
declare type product={
    available:boolean,
    collections:collection[],
    compare_at_price:number,
    compare_at_price_max:number,
    compare_at_price_min:number,
    compare_at_price_varies:boolean,
    content:string,
    created_at:string,
    description:string,
    featured_image:image,
    featured_media:media,
    first_available_variant:variant,
    gift_card?:boolean,
    handle:string,
    has_only_default_variant:boolean,
    id:number,
    images:image[],
    media:media[],
    metafields:metafield[],
    options:string[],
    options_by_name:{[key:string]:product_option},
    options_with_values:product_option[],
    price:number,
    price_max:number,
    price_min:number,
    price_varies:boolean,
    published_at:string,
    requires_selling_plan:boolean,
    selected_or_first_available_selling_plan_allocation:selling_plan_allocation,
    selected_or_first_available_variant:variant,
    selected_selling_plan:selling_plan,
    selected_selling_plan_allocation:selling_plan_allocation,
    selected_variant:variant,
    selling_plan_groups:selling_plan_group[],
    tags:string[],
    template_suffix:string,
    title:string,
    type:string,
    url:string,
    variants:variant[],
    vendor:string
}

declare type company={
    available_locations:company_location[],
    id:number,
    name:string  
}

declare type company_location={
    company:company,
    current?:boolean,
    id:number,
    name:string,
    shipping_address:company_address,
    tax_registration_id:number,
    url_to_set_as_current:string
}
declare type company_address={
    address1:string,
    address2:string,
    attention:string,
    city:string,
    country:country,
    country_code:string,
    id:number,
    province:string,
    province_code:string,
    street:string,
    zip:string
}

declare type customer={
    accepts_marketing:boolean,
    addresses:address[],
    addresses_count:number,
    b2b?:boolean,
    company_available_locations:company_location[],
    current_company:company,
    current_location:company_location,
    default_address:address,
    email:string,
    first_name:string,
    has_account:boolean,
    id:number,
    last_name:string,
    last_order:order,
    name:string,
    orders:order[],
    orders_count:number,
    phone:string,
    tags:string[],
    tax_exempt:boolean,
    total_spent:number
}

declare type tax_line={
    price:number,
    rate:number,
    rate_percentage:number,
    title:string
}
declare type discount_allocation={
    amount:number,
    discount_application:discount_application
}
declare type discount_application={
    target_selection:string,//to verify
    target_type:string,//to verify
    title:string,
    total_allocated_amount:number,
    type:string,//to verify
    value:number,
    value_type:string,//to verify
}
declare type fulfillment={
    created_at:string,
    fulfillment_line_items:line_item[],
    item_count:number,
    tracking_company:string,
    tracking_number:string,
    tracking_url:string
}
declare type line_item={
    discount_allocations:discount_allocation[],
    final_line_price:number,
    final_price:number,
    fulfillment:fulfillment,
    fulfillment_service:string,
    gift_card:boolean,
    grams:number,
    id:number,
    image:image,
    key:string,
    line_level_discount_allocations:discount_allocation[],
    line_level_total_discount:number,
    message:string,
    options_with_values,
    original_line_price:number,
    original_price:number,
    product:product,
    product_id:number,
    properties,
    quantity:number,
    requires_shipping:boolean,
    selling_plan_allocation:selling_plan_allocation,
    sku:string,
    successfully_fulfilled_quantity:number,
    tax_lines:tax_line[],
    taxable:boolean,
    title:string,
    unit_price:number,
    unit_price_measurement:unit_price_measurement,
    url:string,
    url_to_remove:string,
    variant:variant,
    variant_id:number,
    vendor:string
}

declare type shipping_method={
    discount_allocations:discount_allocation[],
    handle:string,
    id:string,
    original_price:number,
    price:number,
    tax_lines:tax_line[],
    title:string
}
declare type transaction_payment_details={
    credit_card_company:string,
    credit_card_last_four_digits:string,
    credit_card_number:string,
    gift_card:gift_card
}
declare type gift_card={
    balance:number,
    code:string,
    currency:string,
    customer:customer,
    enabled:boolean,
    expired:boolean,
    expires_on:string,
    initial_value:number,
    last_four_characters:string,
    pass_url:string,
    product:product,
    properties:[], // to check in shopify
    qr_identifier:string,
    template_suffix:string,
    url:string
}
declare type pending_payment_instruction_input={
    header:string,
    value:string
}

declare type transaction={
    amount:string,
    buyer_pending_payment_instructions:pending_payment_instruction_input[],
    buyer_pending_payment_notice:string,
    created_at:string,
    gateway:string,
    gateway_display_name:string,
    id:number,
    kind:string,//to verify
    name:string,
    payment_details:transaction_payment_details,
    receipt:string,
    show_buyer_pending_payment_instructions?:boolean,
    status:string,//to verify
    status_label:string
}
declare type order={
attributes:[],
billing_address:address,
cancel_reason:string,//to verify
cancel_reason_label:string,
cancelled:boolean,
cancelled_at:string,
cart_level_discount_applications:discount_application[],
created_at:string,
customer:customer,
customer_order_url:string,
customer_url:string,
discount_applications:discount_application[],
email:string,
financial_status:string,//toverify
financial_status_label:string,
fulfillment_status:string,
fulfillment_status_label:string,//to verify
id:string,
item_count:number,
line_items:line_item[],
line_items_subtotal_price:number,
metafields:metafield[],
name:string,
note:string,
order_number:number,
order_status_url:string,
phone:string,
shipping_address:address,
shipping_methods:shipping_method[],
shipping_price:number,
subtotal_line_items:line_item[],
subtotal_price:number,
tags:string[],
tax_lines:tax_line[],
tax_price:number,
total_discounts:number,
total_duties:number,
total_net_amount:number,
total_price:number,
total_refunded_amount:number,
transactions:transaction[]
}
declare type user={
    account_owner:boolean,
    bio:string,
    email:string,
    first_name:string,
    homepage:string,
    image:image,
    last_name:string,
    name:string
}
declare type article={
    author:string,
    comment_post_url:string,
    comments:comment[],
    comments_count:number,
    comments_enabled?:boolean,
    content:string,
    created_at:string,
    excerpt:string,
    excerpt_or_content:string,
    handle:string,
    id:string,
    image:image,
    metafields:metafield[],
    moderated?:boolean,
    published_at:string,
    tags:string[],
    template_suffix:string,
    title:string,
    updated_at:string,
    url:string,
    user:user
}

declare type block={
    id:string,
    settings:any, // to read from block settings
    shopify_attributes:string,
    type:string
}

declare type blog={
    all_tags:string[],
    articles:article[],
    articles_count:number,
    comments_enabled?:boolean,
    handle:string,
    id:number,
    metafields:metafield[],
    moderated?:boolean,
    next_article:article,
    previous_article:article,
    tags:string[],
    template_suffix:string,
    title:string,
    url:string
}

declare type color={
    alpha:number,
    blue:number,
    green:number,
    hue:number,
    lightness:number,
    red:number,
    rgb:string,
    rgba:string,
    saturation:number
}

declare type font={
    baseline_ratio:number,
    fallback_families:string,
    family:string,
    style:string,
    system?:boolean,
    variants:font[],
    weight:number
}

declare type forloop={
    first:boolean,
    index:number,
    index0:number,
    last:boolean,
    length:number,
    parentloop:forloop,
    rindex:number,
    rindex0:number
}
declare type shopify_content = string;

declare const Shopify:{
    contents:{
        content_for_additional_checkout_buttons: shopify_content,
        content_for_header:shopify_content,
        content_for_index:shopify_content,
        content_for_layout:shopify_content,
    },
    additional_checkout_buttons:boolean,
    address:address,
    all_products:{[key: string]: product},
    app:{metafields:metafield[]}
    articles:{[key: string]: article},
    section:{
        blocks:block[]
    }
    blogs:{[key: string]: blog}
    current_page:number,
    current_tags:[],
}