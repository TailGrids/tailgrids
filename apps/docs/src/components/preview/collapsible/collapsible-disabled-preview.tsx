import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/registry/core/collapsible";
import { Locked3 } from "@tailgrids/icons";

export default function CollapsibleDisabledPreview() {
  return (
    <Collapsible isDisabled>
      <CollapsibleTrigger>
        <span className="flex items-center gap-2">
          <Locked3 size={16} className="shrink-0" />
          Team SSO
        </span>
        <span className="rounded-full bg-alert-warning-background px-2.5 py-0.5 text-xs font-medium text-alert-warning-title">
          Pro
        </span>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <p className="text-sm">
          Configure SAML or OIDC single sign-on for your team.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
