export enum RunTimeFlagName {
    allow_dialogs_on_detail_page,
    concepts_inherit_super_type_fearutes,
    modern_default_viewer_behvior,
    modern_prompt_rejection,
    no_fallcback_to_result_collections,
    no_filtering_with_validation,
    support_halt_effect_in_ccomputed_input,
}

export class RunTimeFlag {
    public value: RunTimeFlagName;

    constructor(value: RunTimeFlagName) {
        this.value = value;
    }

    public toBxb(): string {
        return RunTimeFlagName[this.value]
                .toString()
                .replace(/_/g, "-")
                .toLowerCase()
                .trim();
    }
}
