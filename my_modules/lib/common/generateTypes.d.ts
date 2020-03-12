export declare type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    JSON: any;
};
export declare type AddHistory = {
    __typename?: 'AddHistory';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    supplement_id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['String']>;
    supplier?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    count?: Maybe<Scalars['Float']>;
    amount?: Maybe<Scalars['Float']>;
};
export declare type AddHistoryInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    rows_per_page?: Maybe<Scalars['Int']>;
    product_id?: Maybe<Scalars['String']>;
};
export declare type AddItem = {
    __typename?: 'AddItem';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    supplement_id?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    count?: Maybe<Scalars['Float']>;
    amount?: Maybe<Scalars['Float']>;
    supplier?: Maybe<Scalars['String']>;
    remark?: Maybe<Scalars['String']>;
    product?: Maybe<Product>;
};
export declare type AddItemInput = {
    id?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    addNumber?: Maybe<Scalars['Float']>;
    addPrice?: Maybe<Scalars['Float']>;
    addSupplier?: Maybe<Scalars['String']>;
    addRemark?: Maybe<Scalars['String']>;
};
export declare type Address = {
    __typename?: 'Address';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['String']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    zip?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    district?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    is_default?: Maybe<Scalars['Int']>;
    user_id?: Maybe<Scalars['String']>;
    contact_information?: Maybe<Scalars['String']>;
    contact_user_name?: Maybe<Scalars['String']>;
};
export declare type AddressInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['String']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    zip?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    district?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    is_default?: Maybe<Scalars['Int']>;
    user_id?: Maybe<Scalars['String']>;
    contact_information?: Maybe<Scalars['String']>;
    contact_user_name?: Maybe<Scalars['String']>;
};
export declare type AllOrderListInput = {
    page?: Maybe<Scalars['Int']>;
    rows_per_page?: Maybe<Scalars['Int']>;
    sort_type?: Maybe<Scalars['String']>;
};
export declare type Category = {
    __typename?: 'Category';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    remark?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['Int']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    is_enable?: Maybe<Scalars['Int']>;
    parent_id?: Maybe<Scalars['String']>;
    full_parent_id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    img_url?: Maybe<Scalars['String']>;
    c3_id?: Maybe<Scalars['String']>;
    c3_name?: Maybe<Scalars['String']>;
    c3_number?: Maybe<Scalars['String']>;
    c2_id?: Maybe<Scalars['String']>;
    c2_name?: Maybe<Scalars['String']>;
    c2_number?: Maybe<Scalars['String']>;
    p2_name?: Maybe<Scalars['String']>;
    p2_id?: Maybe<Scalars['String']>;
    p2_num?: Maybe<Scalars['String']>;
    p3_name?: Maybe<Scalars['String']>;
    p3_id?: Maybe<Scalars['String']>;
    p3_num?: Maybe<Scalars['String']>;
    parent_data?: Maybe<Category>;
};
export declare type CategoryInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    remark?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    rows_per_page?: Maybe<Scalars['Int']>;
    sort_type?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Boolean']>;
    is_enable?: Maybe<Scalars['Int']>;
    parent_id?: Maybe<Scalars['String']>;
    full_parent_id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    img_url?: Maybe<Scalars['String']>;
    origin_category_id?: Maybe<Scalars['String']>;
    user_id?: Maybe<Scalars['String']>;
};
export declare type ChangePassword = {
    id?: Maybe<Scalars['String']>;
    verification?: Maybe<Scalars['String']>;
    newPass?: Maybe<Scalars['String']>;
};
export declare type ChangePasswordInput = {
    old_password: Scalars['String'];
    new_password: Scalars['String'];
    confirmation_password?: Maybe<Scalars['String']>;
};
export declare type DataConfig = {
    __typename?: 'DataConfig';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['JSON']>;
    remark?: Maybe<Scalars['String']>;
};
export declare type DataConfigInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    type?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['JSON']>;
    remark?: Maybe<Scalars['String']>;
};
export declare type Dictionary = {
    __typename?: 'Dictionary';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    is_disable?: Maybe<Scalars['Int']>;
    dict_type_code?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['Int']>;
    parent_code?: Maybe<Scalars['String']>;
    remark?: Maybe<Scalars['String']>;
};
export declare type DictionaryInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    code?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['Int']>;
    dict_type_code?: Maybe<Scalars['String']>;
    parent_code?: Maybe<Scalars['String']>;
    remark?: Maybe<Scalars['String']>;
    is_disable?: Maybe<Scalars['Int']>;
};
export declare type DictionaryType = {
    __typename?: 'DictionaryType';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    code?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['Int']>;
    parent_code?: Maybe<Scalars['String']>;
    remark?: Maybe<Scalars['String']>;
};
export declare type EditAddressInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['String']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    zip?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    district?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    is_default?: Maybe<Scalars['Int']>;
    user_id?: Maybe<Scalars['String']>;
    contact_information?: Maybe<Scalars['String']>;
    contact_user_name?: Maybe<Scalars['String']>;
};
export declare type EditPayCardInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['String']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    user_id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    user_name?: Maybe<Scalars['String']>;
    address_detail?: Maybe<Scalars['String']>;
    zip_code?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    contact?: Maybe<Scalars['String']>;
    is_default?: Maybe<Scalars['Int']>;
};
export declare type GroupInfo = {
    __typename?: 'GroupInfo';
    finish?: Maybe<Scalars['Int']>;
    doing?: Maybe<Scalars['Int']>;
};
export declare type GroupQueue = {
    __typename?: 'GroupQueue';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['String']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    product_id?: Maybe<Scalars['String']>;
    fill_amount?: Maybe<Scalars['Int']>;
    product?: Maybe<Product>;
};
export declare type GroupQueueListInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['String']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    product_id?: Maybe<Scalars['String']>;
    fill_amount?: Maybe<Scalars['Int']>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    addToShopCart?: Maybe<Result>;
    save_shop_cart?: Maybe<Result>;
    remove_shop_cart?: Maybe<Result>;
    remove_all_shop_cart?: Maybe<Result>;
    importAllUser?: Maybe<Scalars['String']>;
    updateUser?: Maybe<User>;
    updateUserAuth?: Maybe<Scalars['String']>;
    deleteOneUser?: Maybe<Scalars['String']>;
    changePassword?: Maybe<Scalars['String']>;
    save_category?: Maybe<Result>;
    save_product?: Maybe<Result>;
    save_address?: Maybe<Result>;
    set_default_address?: Maybe<Result>;
    save_pay_card?: Maybe<Result>;
    set_default_pay_card?: Maybe<Result>;
    save_order?: Maybe<Result>;
    finish_order?: Maybe<Result>;
    save_group_order?: Maybe<Result>;
    update_user_info?: Maybe<Result>;
    update_password?: Maybe<Result>;
    save_dict_item?: Maybe<Result>;
    set_data_config?: Maybe<Result>;
    save_promo_code?: Maybe<Result>;
    save_product_supplement?: Maybe<Result>;
};
export declare type MutationAddToShopCartArgs = {
    ShopCartInput?: Maybe<ShopCartInput>;
};
export declare type MutationSave_Shop_CartArgs = {
    SaveShopCartInput?: Maybe<SaveShopCartInput>;
};
export declare type MutationRemove_Shop_CartArgs = {
    id: Scalars['String'];
};
export declare type MutationRemove_All_Shop_CartArgs = {
    ids: Array<Scalars['String']>;
};
export declare type MutationImportAllUserArgs = {
    data: Scalars['String'];
};
export declare type MutationUpdateUserArgs = {
    data: UserInput;
};
export declare type MutationUpdateUserAuthArgs = {
    id: Scalars['String'];
    auth: Scalars['String'];
};
export declare type MutationDeleteOneUserArgs = {
    id: Scalars['String'];
};
export declare type MutationChangePasswordArgs = {
    data: ChangePassword;
};
export declare type MutationSave_CategoryArgs = {
    Category?: Maybe<CategoryInput>;
};
export declare type MutationSave_ProductArgs = {
    ProductInput?: Maybe<ProductInput>;
};
export declare type MutationSave_AddressArgs = {
    editAddressInput?: Maybe<EditAddressInput>;
};
export declare type MutationSet_Default_AddressArgs = {
    defaultId: Scalars['String'];
};
export declare type MutationSave_Pay_CardArgs = {
    editPayCardInput?: Maybe<EditPayCardInput>;
};
export declare type MutationSet_Default_Pay_CardArgs = {
    defaultId: Scalars['String'];
};
export declare type MutationSave_OrderArgs = {
    saveOrderInput?: Maybe<SaveOrderInput>;
};
export declare type MutationFinish_OrderArgs = {
    saveOrderInput?: Maybe<SaveOrderInput>;
};
export declare type MutationSave_Group_OrderArgs = {
    saveGroupOrderInput?: Maybe<SaveGroupOrderInput>;
    saveOrderInput?: Maybe<SaveOrderInput>;
};
export declare type MutationUpdate_User_InfoArgs = {
    updateUserInfo?: Maybe<UpdateUserInfoInput>;
};
export declare type MutationUpdate_PasswordArgs = {
    changePasswordInput: ChangePasswordInput;
};
export declare type MutationSave_Dict_ItemArgs = {
    dictionaryInput?: Maybe<DictionaryInput>;
};
export declare type MutationSet_Data_ConfigArgs = {
    dataConfigInput?: Maybe<DataConfigInput>;
};
export declare type MutationSave_Promo_CodeArgs = {
    promoCodeInput?: Maybe<PromoCodeInput>;
};
export declare type MutationSave_Product_SupplementArgs = {
    productSupplementInput?: Maybe<ProductSupplementInput>;
};
export declare type Order = {
    __typename?: 'Order';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    number?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['Int']>;
    actually_paid?: Maybe<Scalars['Float']>;
    address_id?: Maybe<Scalars['String']>;
    address?: Maybe<Address>;
    payment_method_card_id?: Maybe<Scalars['String']>;
    payment_method?: Maybe<PayCard>;
    subtotal?: Maybe<Scalars['Float']>;
    discount_product_total?: Maybe<Scalars['Float']>;
    coupon_discount?: Maybe<Scalars['Float']>;
    vip_discount?: Maybe<Scalars['Float']>;
    transportation_costs?: Maybe<Scalars['Float']>;
    sale_tax?: Maybe<Scalars['Float']>;
    product?: Maybe<Array<Maybe<Product>>>;
    user_id?: Maybe<Scalars['String']>;
    user?: Maybe<User>;
    finish_time?: Maybe<Scalars['Date']>;
};
export declare type OrderProductInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    order_id?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    count?: Maybe<Scalars['Float']>;
};
export declare type OrderUser = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    user_id?: Maybe<Scalars['String']>;
    order_id?: Maybe<Scalars['String']>;
};
export declare type PayCard = {
    __typename?: 'PayCard';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['String']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    user_id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    user_name?: Maybe<Scalars['String']>;
    address_detail?: Maybe<Scalars['String']>;
    zip_code?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    contact?: Maybe<Scalars['String']>;
    is_default?: Maybe<Scalars['Int']>;
};
export declare type PayCardInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['String']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    user_id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    user_name?: Maybe<Scalars['String']>;
    address_detail?: Maybe<Scalars['String']>;
    zip_code?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    contact?: Maybe<Scalars['String']>;
    is_default?: Maybe<Scalars['Int']>;
};
export declare type Product = {
    __typename?: 'Product';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    category_id?: Maybe<Scalars['String']>;
    is_enable?: Maybe<Scalars['Int']>;
    is_hot?: Maybe<Scalars['Int']>;
    is_new?: Maybe<Scalars['Int']>;
    is_delete?: Maybe<Scalars['Int']>;
    remark?: Maybe<Scalars['String']>;
    stock?: Maybe<Scalars['Float']>;
    unit?: Maybe<Scalars['String']>;
    weight?: Maybe<Scalars['Float']>;
    price_in?: Maybe<Scalars['Float']>;
    price_out?: Maybe<Scalars['Float']>;
    price_market?: Maybe<Scalars['Float']>;
    brand?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    c3_id?: Maybe<Scalars['String']>;
    c3_name?: Maybe<Scalars['String']>;
    c3_number?: Maybe<Scalars['String']>;
    c2_id?: Maybe<Scalars['String']>;
    c2_name?: Maybe<Scalars['String']>;
    c2_number?: Maybe<Scalars['String']>;
    c1_id?: Maybe<Scalars['String']>;
    c1_name?: Maybe<Scalars['String']>;
    c1_number?: Maybe<Scalars['String']>;
    imgs?: Maybe<Array<Maybe<ProductImg>>>;
    sort?: Maybe<Scalars['Int']>;
    oneImgUrl?: Maybe<Scalars['String']>;
    is_group?: Maybe<Scalars['Int']>;
    group_precision?: Maybe<Scalars['Int']>;
    group_amount?: Maybe<Scalars['Int']>;
    group_remark?: Maybe<Scalars['String']>;
    group_info?: Maybe<GroupInfo>;
    count?: Maybe<Scalars['Int']>;
};
export declare type ProductImg = {
    __typename?: 'ProductImg';
    id?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    url?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type ProductImgInput = {
    id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    url?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};
export declare type ProductInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    category_id?: Maybe<Scalars['String']>;
    remark?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_enable?: Maybe<Scalars['Int']>;
    is_delete?: Maybe<Scalars['Boolean']>;
    is_hot?: Maybe<Scalars['Int']>;
    is_new?: Maybe<Scalars['Int']>;
    stock?: Maybe<Scalars['Float']>;
    unit?: Maybe<Scalars['String']>;
    weight?: Maybe<Scalars['Float']>;
    price_in?: Maybe<Scalars['Float']>;
    price_out?: Maybe<Scalars['Float']>;
    price_market?: Maybe<Scalars['Float']>;
    brand?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    rows_per_page?: Maybe<Scalars['Int']>;
    sort_type?: Maybe<Scalars['String']>;
    imgs?: Maybe<Array<Maybe<ProductImgInput>>>;
    origin_category_id?: Maybe<Scalars['String']>;
    sort?: Maybe<Scalars['Int']>;
    user_id?: Maybe<Scalars['String']>;
    is_group?: Maybe<Scalars['Int']>;
    group_precision?: Maybe<Scalars['Int']>;
    group_amount?: Maybe<Scalars['Int']>;
    group_remark?: Maybe<Scalars['String']>;
};
export declare type ProductSupplement = {
    __typename?: 'ProductSupplement';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    state?: Maybe<Scalars['Int']>;
    amount?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    supplier?: Maybe<Scalars['String']>;
    user_id?: Maybe<Scalars['String']>;
    addItemList?: Maybe<Array<Maybe<AddItem>>>;
};
export declare type ProductSupplementInput = {
    id?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['Int']>;
    addList?: Maybe<Array<Maybe<AddItemInput>>>;
};
export declare type ProductSupplementListInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    state?: Maybe<Scalars['Int']>;
    amount?: Maybe<Scalars['Float']>;
    number?: Maybe<Scalars['String']>;
    code?: Maybe<Scalars['String']>;
    supplier?: Maybe<Scalars['String']>;
    user_id?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    rows_per_page?: Maybe<Scalars['Int']>;
};
export declare type PromoCode = {
    __typename?: 'PromoCode';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    remark?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    discount_type?: Maybe<Scalars['String']>;
    discount_amount?: Maybe<Scalars['Float']>;
    discount_condition?: Maybe<Scalars['String']>;
    discount_condition_amount?: Maybe<Scalars['Float']>;
    product_category?: Maybe<Scalars['String']>;
    img_url?: Maybe<Scalars['String']>;
    effective_date_start?: Maybe<Scalars['Date']>;
    effective_date_end?: Maybe<Scalars['Date']>;
    promo_code_type?: Maybe<Scalars['String']>;
    reuse_times?: Maybe<Scalars['Int']>;
    code?: Maybe<Scalars['String']>;
    category_data?: Maybe<Category>;
};
export declare type PromoCodeInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    remark?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    discount_type?: Maybe<Scalars['String']>;
    discount_amount?: Maybe<Scalars['Float']>;
    discount_condition?: Maybe<Scalars['String']>;
    discount_condition_amount?: Maybe<Scalars['Float']>;
    product_category?: Maybe<Scalars['String']>;
    img_url?: Maybe<Scalars['String']>;
    effective_date_start?: Maybe<Scalars['Date']>;
    effective_date_end?: Maybe<Scalars['Date']>;
    promo_code_type?: Maybe<Scalars['String']>;
    reuse_times?: Maybe<Scalars['Int']>;
    code?: Maybe<Scalars['String']>;
};
export declare type Query = {
    __typename?: 'Query';
    user_info?: Maybe<User>;
    user_coin?: Maybe<UserCoin>;
    getPassCode?: Maybe<Scalars['String']>;
    allDataUser?: Maybe<Scalars['String']>;
    user?: Maybe<Array<Maybe<User>>>;
    allUser?: Maybe<Array<Maybe<User>>>;
    oneUser?: Maybe<User>;
    totalUser?: Maybe<Scalars['Int']>;
    category_total?: Maybe<Scalars['Int']>;
    category_list?: Maybe<Array<Maybe<Category>>>;
    category_origin?: Maybe<Category>;
    product_total?: Maybe<Scalars['Int']>;
    product_list?: Maybe<Array<Maybe<Product>>>;
    shop_cart_list?: Maybe<Array<Maybe<ShopCart>>>;
    order_list?: Maybe<Array<Maybe<Order>>>;
    group_order_list?: Maybe<Array<Maybe<Order>>>;
    order_detail?: Maybe<Order>;
    all_order_list?: Maybe<Array<Maybe<Order>>>;
    all_order_list_total?: Maybe<Scalars['Int']>;
    address_list?: Maybe<Array<Maybe<Address>>>;
    pay_card_list?: Maybe<Array<Maybe<PayCard>>>;
    group_queue_list?: Maybe<Array<Maybe<GroupQueue>>>;
    product_supplement_list?: Maybe<Array<Maybe<ProductSupplement>>>;
    product_supplement_list_total?: Maybe<Scalars['Int']>;
    dict_type_list?: Maybe<Array<Maybe<DictionaryType>>>;
    dict_item_list?: Maybe<Array<Maybe<Dictionary>>>;
    data_config?: Maybe<DataConfig>;
    promo_code_list?: Maybe<Array<Maybe<PromoCode>>>;
    test?: Maybe<Scalars['String']>;
    add_history_list_by_product?: Maybe<Array<Maybe<AddHistory>>>;
    add_history_list_total?: Maybe<Scalars['Int']>;
};
export declare type QueryGetPassCodeArgs = {
    pass: Scalars['String'];
};
export declare type QueryAllUserArgs = {
    data?: Maybe<UserInput>;
};
export declare type QueryOneUserArgs = {
    id: Scalars['String'];
};
export declare type QueryTotalUserArgs = {
    data?: Maybe<UserInput>;
};
export declare type QueryCategory_TotalArgs = {
    CategoryInput?: Maybe<CategoryInput>;
};
export declare type QueryCategory_ListArgs = {
    CategoryInput?: Maybe<CategoryInput>;
};
export declare type QueryCategory_OriginArgs = {
    id?: Maybe<Scalars['String']>;
};
export declare type QueryProduct_TotalArgs = {
    ListInput?: Maybe<ProductInput>;
};
export declare type QueryProduct_ListArgs = {
    ListInput?: Maybe<ProductInput>;
};
export declare type QueryShop_Cart_ListArgs = {
    ShopCartInput?: Maybe<ShopCartInput>;
};
export declare type QueryOrder_ListArgs = {
    id?: Maybe<Scalars['String']>;
};
export declare type QueryGroup_Order_ListArgs = {
    id?: Maybe<Scalars['String']>;
};
export declare type QueryOrder_DetailArgs = {
    id: Scalars['String'];
    isGroup?: Maybe<Scalars['Int']>;
};
export declare type QueryAll_Order_ListArgs = {
    allOrderListInput?: Maybe<AllOrderListInput>;
};
export declare type QueryAll_Order_List_TotalArgs = {
    allOrderListInput?: Maybe<AllOrderListInput>;
};
export declare type QueryAddress_ListArgs = {
    addressInput?: Maybe<AddressInput>;
};
export declare type QueryPay_Card_ListArgs = {
    payCardInput?: Maybe<PayCardInput>;
};
export declare type QueryGroup_Queue_ListArgs = {
    groupQueueListInput?: Maybe<GroupQueueListInput>;
};
export declare type QueryProduct_Supplement_ListArgs = {
    productSupplementListInput?: Maybe<ProductSupplementListInput>;
};
export declare type QueryProduct_Supplement_List_TotalArgs = {
    productSupplementListInput?: Maybe<ProductSupplementListInput>;
};
export declare type QueryDict_Type_ListArgs = {
    dictionaryInput?: Maybe<DictionaryInput>;
};
export declare type QueryDict_Item_ListArgs = {
    dictionaryInput?: Maybe<DictionaryInput>;
};
export declare type QueryData_ConfigArgs = {
    dataConfigInput?: Maybe<DataConfigInput>;
};
export declare type QueryPromo_Code_ListArgs = {
    PromoCodeInput?: Maybe<PromoCodeInput>;
};
export declare type QueryAdd_History_List_By_ProductArgs = {
    addHistoryInput?: Maybe<AddHistoryInput>;
};
export declare type QueryAdd_History_List_TotalArgs = {
    addHistoryInput?: Maybe<AddHistoryInput>;
};
export declare type Result = {
    __typename?: 'result';
    flag?: Maybe<Scalars['Int']>;
    msg?: Maybe<Scalars['String']>;
    category?: Maybe<Category>;
    product?: Maybe<Product>;
    shopCart?: Maybe<ShopCart>;
    address?: Maybe<Address>;
    payCard?: Maybe<PayCard>;
    order?: Maybe<Order>;
    user?: Maybe<User>;
    dictionary?: Maybe<Dictionary>;
    dataConfig?: Maybe<DataConfig>;
    token?: Maybe<Token>;
    promoCode?: Maybe<PromoCode>;
};
export declare type SaveGroupOrderInput = {
    id?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    group_queue_id?: Maybe<Scalars['String']>;
    order_group_amount?: Maybe<Scalars['Int']>;
    origin_group_amount?: Maybe<Scalars['Int']>;
};
export declare type SaveOrderInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    is_delete?: Maybe<Scalars['Int']>;
    number?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['Int']>;
    actually_paid?: Maybe<Scalars['Float']>;
    address_id?: Maybe<Scalars['String']>;
    payment_method_card_id?: Maybe<Scalars['String']>;
    subtotal?: Maybe<Scalars['Float']>;
    discount_product_total?: Maybe<Scalars['Float']>;
    coupon_discount?: Maybe<Scalars['Float']>;
    vip_discount?: Maybe<Scalars['Float']>;
    transportation_costs?: Maybe<Scalars['Float']>;
    sale_tax?: Maybe<Scalars['Float']>;
    order_id?: Maybe<Scalars['String']>;
    product?: Maybe<Array<Maybe<OrderProductInput>>>;
    user?: Maybe<Array<Maybe<OrderUser>>>;
    finish_time?: Maybe<Scalars['Date']>;
};
export declare type SaveShopCartInput = {
    id: Scalars['String'];
    product_id?: Maybe<Scalars['String']>;
    number: Scalars['Int'];
    is_next: Scalars['Int'];
};
export declare type ShopCart = {
    __typename?: 'ShopCart';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    product_id?: Maybe<Scalars['String']>;
    product?: Maybe<Product>;
    is_next?: Maybe<Scalars['Int']>;
    number?: Maybe<Scalars['Int']>;
};
export declare type ShopCartInput = {
    id?: Maybe<Scalars['String']>;
    product_id?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
    is_next?: Maybe<Scalars['Int']>;
};
export declare type Token = {
    __typename?: 'token';
    token?: Maybe<Scalars['String']>;
    refreshtoken?: Maybe<Scalars['String']>;
};
export declare type UpdateUserInfoInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    user_name?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};
export declare type User = {
    __typename?: 'User';
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    create_time?: Maybe<Scalars['Date']>;
    update_time?: Maybe<Scalars['Date']>;
    user_name?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    address?: Maybe<Address>;
};
export declare type UserCoin = {
    __typename?: 'UserCoin';
    current_mouth_icons?: Maybe<Scalars['Float']>;
    next_mouth_icons?: Maybe<Scalars['Float']>;
    card_number?: Maybe<Scalars['Int']>;
};
export declare type UserInput = {
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    auth?: Maybe<Scalars['String']>;
    message?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    rowsPerPage?: Maybe<Scalars['Int']>;
    sortData?: Maybe<UserSortInput>;
};
export declare type UserSortInput = {
    code?: Maybe<Scalars['Int']>;
};
